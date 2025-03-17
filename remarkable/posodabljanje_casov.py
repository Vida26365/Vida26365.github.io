import os
import json
import time

full_path = r"C:\Users\vidam\AppData\Roaming\remarkable\desktop"

for file in os.listdir(full_path):
    if file.endswith(".metadata"):
        file_path = os.path.join(full_path, file)
        print(file_path)
        with open(file_path, "r", encoding="UTF-8") as f:
            data = json.load(f)    
        data["lastModified"] = str(int(time.time() * 1000))
        with open(file_path, "w", encoding="UTF-8") as f:
            json.dump(data, f)

            