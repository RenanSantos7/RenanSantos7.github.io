import cabecalho from './componentes/cabecalho.js'
import rodape from './componentes/rodape.js'
import animaMenu from './animMenu.js'

// % Compoonentes
cabecalho()
rodape()
animaMenu()

//% Tag List
const elTagList = document.querySelector('.list-tags')
elTagList.innerHTML = tagList.map(tag => {
    `<a class="tag">#${tag}</a>`
})

//% Definir fundo do header
const header = document.querySelector('.blog-post__header')
console.log(header)
header.style.backgroundImage = `url(${imageURL})`