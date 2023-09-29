function montaPagina(projeto) {
    const header = document.querySelector(".projeto__header")
    const titulo = header.querySelector("h1")
    const tituloLink = header.querySelector("a")
    const banner = header.querySelector("img")
    const projetoDescricao = document.querySelector("#projeto__descrição")

    titulo.textContent = projeto.nome
    tituloLink.href = projeto.link
    banner.src = projeto.img
    projetoDescricao.innerHTML = projeto.descricao
}

montaPagina(projetosDados[2])