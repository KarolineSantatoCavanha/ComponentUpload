/*procure no drag-files */
const dropArea = document.querySelector('.drag-files')
/*é uma funçao que vai ficar percebendo qualquer alteraçao dentro da caixinha do drogArea */
/*e o nome da alteraçao e dragover, o nome que colocamos no css */
dropArea.addEventListener('dragover', () =>{
  /*aqui estamos adicionado o dragover */
  dropArea.classList.add('dragover')

})

 dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("dragover")
})