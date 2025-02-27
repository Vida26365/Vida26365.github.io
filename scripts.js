const json_path = "remarkable/metadata2.json";

async function fetchFiles() {
    const response = await fetch(json_path);
    const data = await response.json();
    const fileList = document.getElementById('file-list');

    const fileGroups = {};

    // Group files by their parent folder
    data.files.forEach(file => {
        const parts = file.split('/');
        const folder = parts.slice(0, -1).join('/');
        if (!fileGroups[folder]) {
            fileGroups[folder] = [];
        }
        fileGroups[folder].push(file);
    });

    // Create nested list structure
    for (const folder in fileGroups) {
        const folderElement = document.createElement("div");
        const folderTitle = document.createElement("h2");
        folderTitle.textContent = folder;
        folderElement.appendChild(folderTitle);

        const ulElement = document.createElement("ul");
        fileGroups[folder].forEach(file => {
            const liElement = document.createElement("li");
            const linkElement = document.createElement("a");
            linkElement.textContent = file.split('/').pop();
            linkElement.href = `remarkable/${file}`;
            linkElement.target = "_blank"; // Open in a new tab
            liElement.appendChild(linkElement);
            ulElement.appendChild(liElement);
        });

        folderElement.appendChild(ulElement);
        fileList.appendChild(folderElement);
    }
}

fetchFiles();