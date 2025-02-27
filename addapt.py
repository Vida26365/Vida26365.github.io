# addapt metadata
import json
import os

def addapt_metadata(path):
    slovar = {}
    lst = []
    with open(path, 'r', encoding="utf-8") as f:
        metadata = json.load(f)
    for sl in metadata.values():
        print(sl)
        pth = "/".join(sl["family"])
        pth += "/" + sl["name"]
        lst.append(pth)
    slovar["files"] = lst
    return slovar

def write_metadata(path, slovar):
    with open(path, 'w', encoding="utf-8") as f:
        json.dump(slovar, f, ensure_ascii=False, indent=4)

cin = os.path.join("remarkable", "metadata.json")
cout = os.path.join("remarkable", "metadata2.json")
write_metadata(cout, addapt_metadata(cin))