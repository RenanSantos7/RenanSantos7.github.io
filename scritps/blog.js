import cabecalho from './componentes/cabecalho.js'
import rodape from './componentes/rodape.js'
import animaMenu from './animMenu.js'

// % Compoonentes
cabecalho()
rodape()
animaMenu()

//% Tag List
const elTagList = document.querySelector('.list-tags')
console.log(tagList)
tagList.forEach(tag => {
    elTagList.innerHTML += `<a class="tag">#${tag}</a>`
});

//% Definir fundo do header
const header = document.querySelector('.blog-post__header')
header.style.backgroundImage = `url(${imageURL})`