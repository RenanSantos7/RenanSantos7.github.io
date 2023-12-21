import projetosDados from "./projetosDados.js";
import cabecalho from "./componentes/cabecalho.js";
import menuMobile from './menuMobile.js'

const pagina = parseInt(localStorage.getItem('projetoID'))

const projetoSelecionado = projetosDados.find(
    projeto => projeto.id === pagina
)

montaPagina(projetoSelecionado)

function montaPagina(projeto) {
    const header = document.querySelector(".projeto__header")
    const projetoDescricao = document.querySelector("#projeto__descrição")
    
    header.innerHTML = `
        <div id="titulo">
        <h1>${projeto.nome}</h1>
        <a href="${projeto.link}">Visitar projeto</a>
        </div>
        <figure>
        <img src="${projeto.img}" alt="Vade Mecum Tela Principal">
        </figure>
    `
    projetoDescricao.innerHTML = projeto.texto
}

cabecalho()
menuMobile()
