import cabecalho from './componentes/cabecalho.js'
import rodape from './componentes/rodape.js'
import menuMobile from './menuMobile.js'
// tagList e imageURL estão definidas no documento HTML

//% Tag List
const elTagList = document.querySelector('.list-tags')
tagList.forEach(tag => {
    elTagList.innerHTML += `<a class="tag">#${tag}</a>`
});

//% Definir fundo do header
const header = document.querySelector('.blog-post__header')
header.style.backgroundImage = `url(${imageURL})`

// % Compoonentes
cabecalho()
rodape()
menuMobile()
