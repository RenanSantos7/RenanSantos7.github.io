import animaMenu from './animMenu.js'
import mudaFrase from './mudafrase.js'
import menuMobile from './menuMobile.js'

animaMenu()
document.addEventListener('load', mudaFrase());

// Cria uma media query que verifica se a largura da tela é menor que 700 pixels
var mediaQuery = window.matchMedia("(max-width: 700px)")

// Adiciona um evento que chama a função menuMobile() sempre que a media query mudar
mediaQuery.addEventListener(menuMobile)

// Chama a função menuMobile() pela primeira vez
menuMobile()