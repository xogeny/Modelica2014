import json
import xml.etree.ElementTree as ET

tree = ET.parse('easychair.xml')
submissions = tree.find("submissions").iter('submission')
subs_by_num = {}

for sub in submissions:
    num = sub.find('number').text
    title = sub.find('title').text.strip()
    abstract = sub.find('abstract').text
    authors = []
    for a in sub.find('authors').iter("author"):
        authors.append("%s %s" % (a.find("firstName").text,
                                  a.find("lastName").text))
    subs_by_num[num] = {"title": title,
                        "abstract": abstract,
                        "authors": authors}

with open("schedule.json", "r") as fp:
    schedule = json.load(fp)

schedule["papers"] = subs_by_num

with open("modelica2014.json", "w") as fp:
    json.dump(schedule, fp, indent=2)