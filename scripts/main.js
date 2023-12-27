import mudaFrase from './mudafrase.js'
import menuMobile from './menuMobile.js'
import listaCards from './listaCards.js'

// cria os cards dos projetos
listaCards()

// insere a frase da seção #frase
document.addEventListener('load', mudaFrase());

// no mobile, substitui o menu por um botão 
menuMobile()