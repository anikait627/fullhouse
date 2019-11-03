import pymongo
from pprint import pprint
import json
import random


def shelter_assign(shelter_num):
    pass


def count_supply(arr):

    totalshoes = 0
    totalshirts = 0
    totalpants = 0
    totalbaby = 0


    for d in arr:

        if "Shoes" in d["tags"]:
            totalshoes += 1
        if "Shirts" in d["tags"]:
            totalshirts += 1
        if "Pants" in d["tags"]:
            totalpants += 1
        if "Baby" in d["tags"]:
            totalbaby += 1

    return totalshoes, totalshirts, totalpants, totalbaby


def scarcity(shoes, shirts, pants, baby, totals):
    """
    Takes in the ideal values for above,
    and array of dictionaries readlines
    """

    totalshoes,totalshirts,totalpants,totalbaby = totals

    scarcity = {}
    surplus = {}
    
    if totalshoes < 0.9 * shoes:
        scarcity["Shoes"] = totalshoes
    elif totalshoes > 1.1 * shoes:
        surplus["Shoes"] = totalshoes

    if totalshirts < 0.9 * shirts:
        scarcity["Shirts"] = totalshirts
    elif totalshoes > 1.1 * shoes:
        surplus["Shirts"] = totalshirts
    
    if totalpants < 0.9 * pants:
        scarcity["Pants"] = totalpants
    elif totalshoes > 1.1 * shoes:
        surplus["Pants"]
    
    if totalbaby < 0.9 * baby:
        scarcity["Baby"] = totalbaby
    elif totalshoes > 1.1 * shoes:
        surplus["Baby"] = totalbaby


    return scarcity, surplus
    
