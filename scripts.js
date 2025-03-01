const json_path = "remarkable/zvezki/metadata.json";

async function fetchFiles() {
    const response = await fetch(json_path);
    const data = await response.json();
    const fileList = document.getElementById('file-list');

    const fileGroups = {};

    // Group files by their parent folder
    Object.keys(data).forEach(key => {
        const file = data[key];
        const folder = file.family.join('/');
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
            linkElement.textContent = file.name;
            linkElement.href = `remarkable/${folder}/${file.name}.pdf`;
            linkElement.target = "_blank"; // Open in a new tab

            const timeElement = document.createElement("div");
            const lastModified = new Date(file["last modified"] * 1000).toLocaleString();
            timeElement.textContent = `nazadnje spremenjeno: ${lastModified}`;

            liElement.appendChild(linkElement);
            liElement.appendChild(timeElement);
            ulElement.appendChild(liElement);
        });

        folderElement.appendChild(ulElement);
        fileList.appendChild(folderElement);
    }
}

fetchFiles();