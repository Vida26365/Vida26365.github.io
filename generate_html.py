import json
import os
metadata_path = os.path.join("remarkable", "metadata.json")

osnova  = """<!DOCTYPE html>

<html>
<head>
    <title>Vida</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <h1>Moji zapiski</h1>
    <div id="file-list"></div>

    <script src="scripts.js"></script>
</body>"""


with open(metadata_path, "r", encoding="utf-8") as file:
    data = json.load(file)
    
def parse_dict(slovar):
    # for mapa in slovar["content"]
    pass