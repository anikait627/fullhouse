import time
import pandas as pd
import requests
from bs4 import BeautifulSoup as bs
from selenium.webdriver.common.keys import Keys
from selenium import webdriver


lines = open("urls.txt", "r").readlines()

for line in lines:
    html = requests.get(line).text
    soup = bs(html, 'html.parser')

    ul = soup.find("ul", class_="breadcrumb")
    lis = ul.findAll("li")[1:]

    tags = []
    for li in lis:
        tags.append(li.find("a").getText())
    


for i in range(1, 10):
    clothing_url = "https://www.shopgoodwill.com/Listings?st=&sg=&c=453&s=&lp=0&hp=999999&sbn=False&spo=False&snpo=False&socs=False&sd=False&sca=False&caed=11/2/2019%2012:00:00%20AM&cadb=7&scs=False&sis=False&col=0&p="+str(i)+"&ps=40&desc=False&ss=0&UseBuyerPrefs=true"

    html = requests.get(clothing_url).text

    soup = bs(html,'html.parser')

    #print(soup)

    for s in soup.findAll('li',class_="widget"):
        url = "https://www.shopgoodwill.com" + s.find('a')['href']
        print(url)