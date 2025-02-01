json_path = "remarkable/metadata.json";

async function fetchFiles() {
    const response = await fetch(json_path);
    const slovar = await response.json();
    const fileList = document.getElementById('file-list');

    function for_files(dict, path = '') {
        for (const folder in dict.folders) {
            const folderElement = document.createElement("div");
            const folderPath = `${path}${folder}/`;
            for_files(dict.folders[folder].content, folderPath);
        }
        for (const file in dict.files) {
            const fileElement = document.createElement("div");
            const linkElement = document.createElement("a");
            linkElement.textContent = file;
            linkElement.href = `${path}${file}`;
            fileElement.appendChild(linkElement);
            fileList.appendChild(fileElement);
        }
    }
    for_files(slovar);

}

fetchFiles();