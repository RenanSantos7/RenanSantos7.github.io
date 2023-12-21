import projetosDados from "./projetosDados.js";

export default function listaProjetos() {
    const secProjetos = document.querySelector('#projetos-container')
    
    const projetosOrdenados = projetosDados.sort((a, b) => {
        return a.atualizacao < b.atualizacao ? -1 : a.atualizacao > b.atualizacao ? 1 : 0
    })
    projetosOrdenados.reverse()
    const projetos = projetosOrdenados.slice(0, 12)

    projetos.map(projeto => secProjetos.innerHTML += `
        <article class="projeto card">
            <a class="card__link projeto__link" href="projeto.html" data-pagina="${projeto.id}">
                <figure class="card__imagem">
                    <img alt="" src=${projeto.img}>
                </figure>
                <div class="card__texto">
                    <h3>${projeto.nome}</h3>
                    <div>${projeto.descricao}</div>
                </div>
            </a>
        </article>
    `)
}
