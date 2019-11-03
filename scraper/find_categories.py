
import json
lines = open("items.txt", "r").readlines()

categories = set()

for line in lines:
    obj = json.loads(line)
    for tag in obj["tags"]:
        categories.add(tag)

print("\n".join(categories))