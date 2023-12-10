import projetosDados from "./projetosDados.js";

export default function listaProjetos() {
    const secProjetos = document.querySelector('#projetos-container');
    const projetos = [...projetosDados];
    projetos.reverse();

    projetos.map(projeto => secProjetos.innerHTML += `
    <article class="projeto card">
        <a class="card__link projeto__link" href="projeto.html" data-pagina="${projeto.id}">
            <figure class="card__imagem">
                <img alt="Todo list" src=${projeto.img}>
            </figure>
            <div class="card__texto">
                <h3>${projeto.nome}</h3>
                <div>${projeto.descrição}</div>
            </div>
        </a>
    </article>
`);
}

