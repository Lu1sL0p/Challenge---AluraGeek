const dropArea = document.querySelector(".drag-area");
const dragText = dropArea.querySelector("h3");
const button = dropArea.querySelector("button");
const input = dropArea.querySelector("#input-file");
let files;

button.addEventListener("click", (e) => {
  input.click();
});

input.addEventListener("change", (e) => {
  files = this.files;
  dropArea.classList.add("active");
  showFiles(files);
  dropArea.classList.remove("Active");
});

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = "Suelta para cargar el archivo";
});

dropArea.addEventListener("dragleave", (e) => {
  e.preventDefault();
  dropArea.classList.remove("active");
  dragText.textContent = "Arrastra una imágen";
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  showFiles(files);
  dropArea.classList.remove("active");
  dragText.textContent = "Arrastra una imágen";
});

function showFiles(files) {
  processFile(files);
}

function processFile(file) {
  const docType = file.type;
  const validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/JPG"];

  if (validExtensions.includes(docType)) {
    const fileReader = new FileReader();
    const id = `file-${Math.random().toString(32).substring(7)}`;

    fileReader.addEventListener("load", (e) => {
      const fileUrl = fileReader.result;
      const image = `
            <div id="${id}" class="file-container">
                <img src="${fileUrl}" alt="${file.name}" width="50px">
                <div class="status">
                    <span>${file.name}</span>
                    <span class="status-text">
                        Loading...
                    </span>
                </div>
            </div>    
            `;

      const html = document.querySelector("#preview").innerHTML;
      document.querySelector("#preview").innerHTML = image + html;
    });

    fileReader.readAsDataURL(file);
    uploadFile(file, id);
  } else {
    alert("Archivo no valido");
  }
}

function uploadFile(file) {}
