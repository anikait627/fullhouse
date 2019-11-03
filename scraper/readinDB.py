import pymongo
from pprint import pprint
import json
import random
client = pymongo.MongoClient("mongodb+srv://admin:1234@testcluster-ps7os.azure.mongodb.net/test")

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
    print(d)





