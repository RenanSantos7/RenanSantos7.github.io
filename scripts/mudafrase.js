import frases from '.dados/frases.json'

const citacao = document.querySelector('#citacao');
const autorCitacao = document.querySelector('#autor');

function geraInteiroAleatorio(min, max) { //esta função exclui o valor máximo
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export default function mudaFrase() {
    let i = geraInteiroAleatorio(0, frases.length);
    citacao.textContent = frases[i].frase;
    autorCitacao.textContent = frases[i].autor;
}
