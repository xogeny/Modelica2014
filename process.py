#!/bin/env python

import json
import xml.etree.ElementTree as ET

tree = ET.parse('easychair.xml')
submissions = tree.find("submissions").iter('submission')
title_to_num = {}
subs_by_num = {}

for sub in submissions:
    num = sub.find('number').text
    title = sub.find('title').text.strip()
    abstract = sub.find('abstract').text
    title_to_num[title] = num
    subs_by_num[num] = {"title": title, "abstract": abstract}

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
        authors = pdata[0]
        title = ".".join(pdata[1:]).strip()
        num = title_to_num.get(title, "")
        if num=="":
            print "Couldn't find number for: '%s'" % (title,)
        paper = {"authors": authors, "title": title}
        session["papers"].append(paper)

data = {"program": program}

# print str(subs_by_num)

fp = open("data.json", "w")
json.dump(data, fp, indent=2)
fp.close()
