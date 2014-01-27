#!/bin/env python

import json

fp = open("raw.data", "r")
program = []

lines = fp.readlines()
fp.close()
slot = None

for line in lines:
    if line.startswith("* "):
        if slot:
            program.append(slot)
        slot = {"slot": line.strip()[2:], "sessions": []}
    if line.startswith("** "):
        session = {"name": line.strip()[3:], "room": "TBD", "papers": []}
        slot["sessions"].append(session)
    if line.startswith("*** "):
        pdata = line.strip()[4:].split(".")
        paper = {"authors": pdata[0], "title": ".".join(pdata[1:])}
        session["papers"].append(paper)

data = {"program": program}

fp = open("data.json", "w")
json.dump(data, fp, indent=2)
fp.close()
