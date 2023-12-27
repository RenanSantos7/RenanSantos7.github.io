import mudaFrase from './mudafrase.js'
import listaCards from './listaCards.js'
import animaMenu from './animaMenu.js'
import menuMobile from './componentes/menuMobile.js'

// cria os cards dos projetos
listaCards()

// anima os menus no Firefox
animaMenu()

// insere a frase da seção #frase
document.addEventListener('load', mudaFrase());

// no mobile, substitui o menu por um botão 
menuMobile()
