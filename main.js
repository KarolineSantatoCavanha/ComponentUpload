/*procure no drag-files */
const drogArea = Document.querySelector('.drag-files')
/*é uma funçao que vai ficar percebendo qualquer alteraçao dentro da caixinha do drogArea */
/*e o nome da alteraçao e dragover, o nome que colocamos no css */
drogArea.addEventListener('dragover', () =>{
  /*aqui estamos adicionado o dragover */
  drogArea.classList.add('dragover')
})