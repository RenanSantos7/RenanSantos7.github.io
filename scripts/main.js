import mudaFrase from './mudafrase.js'
import menuMobile from './menuMobile.js'
import listaProjetos from './listaProjetos.js'
import animaMenu from './animMenu.js'

// animação que diminui o menu conforme o scroll
animaMenu()

// cria os cards dos projetos
listaProjetos()

// insere a frase da seção #frase
document.addEventListener('load', mudaFrase());

// no mobile, substitui o menu por um botão 
menuMobile()