import os

def gitanje():
    os.system("git add remarkable/zvezki")
    os.system("git commit -m \"posodobljeni zvezki\"")
    os.system("git push")
