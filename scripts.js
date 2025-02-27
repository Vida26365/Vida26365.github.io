const json_path = "remarkable/metadata2.json";

async function fetchFiles() {
    const response = await fetch(json_path);
    const data = await response.json();
    const fileList = document.getElementById('file-list');

    data.files.forEach(file => {
        const fileElement = document.createElement("div");
        const linkElement = document.createElement("a");
        linkElement.textContent = file;
        linkElement.href = `remarkable/${file}`;
        linkElement.target = "_blank"; // Open in a new tab
        fileElement.appendChild(linkElement);
        fileList.appendChild(fileElement);
    });
}

fetchFiles();