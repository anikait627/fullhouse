import pymongo
from pprint import pprint
import json
import os
import random
client = pymongo.MongoClient(os.getenv("MONGO_CONNECTION_STRING"))

db = client.fullhouse

items = db.items

#read in txt files

def read_file(filename):
    with open(filename) as f:
        lines = f.readlines()
        return lines

readlines = read_file("items.txt")

readlines = [json.loads(i) for i in readlines]

for d in readlines:
    d["shelterID"] = random.randint(1,4)
    new_tags = set()
    for item in d["tags"]:
        item = item.replace("'", "").strip()
        subtags = item.split(" ")
        for s in subtags:
            new_tags.add(s)
    d["tags"] = list(new_tags)

inserted = items.insert_many(readlines)