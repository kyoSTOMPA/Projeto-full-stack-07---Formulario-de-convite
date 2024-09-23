const toggle = document.getElementById('toggle');
const toggleText = document.getElementById('toggleText');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    toggleText.textContent = 'Claro';
  } else {
    toggleText.textContent = 'Escuro';
  }
});

const fileUpload = document.getElementById('file');
const fileNameDisplay = document.getElementById('upload');

fileUpload.addEventListener('change', function() {
  const file = fileUpload.files[0];
  if (file) {
    fileNameDisplay.textContent = file.name;
    console.log('Tipo de arquivo:', file.type);
  } else {
    fileNameDisplay.textContent = 'Nenhum arquivo selecionado';
  }
});