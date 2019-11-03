import time
import requests
import random
import json
from bs4 import BeautifulSoup as bs
lines = open("urls.txt", "r").readlines()

for line in lines:
    line = line.strip()
    user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'
    res = requests.get(line, headers={'User-Agent': user_agent})
    soup = bs(res.text, 'html.parser')

    ul = soup.find("ul", class_="breadcrumb")
    lis = ul.findAll("li")[1:]

    tags = []
    count = 0
    for li in lis:
        if count == 3:
            break
        if li.find("a") == None:
            break
        tags.append(li.find("a").get_text())
        count += 1
    productName = soup.find("h1", class_="product-title").get_text()
    productCount = random.randint(1, 10)
    product = {
        "id": int(line.split("/Item/")[1]),
        "tags": tags,
        "name": productName,
        "count": productCount,
    }
    print(json.dumps(product))