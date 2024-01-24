import projetosDados from './dados/projetosDados.js'
import blogposts from './dados/blogposts.js'

/** @description cria os cards de projetos e de posts na homepage **/
export default function listaCards() {
	const secProjetos = document.querySelector('#projetos-container')
	const secBlog = document.querySelector('#posts-container')

    function organizar(array, prop) {
        const arrayOrganizado = array.sort((a, b) => {
            const dateA = new Date(`${a[prop]}`)
            const dateB = new Date(`${b[prop]}`)
            return dateA < dateB ? 1 : dateA > dateB ? -1 : 0
        })
        const arrayFinal = arrayOrganizado.slice(0, 12)
        return arrayFinal
    }

    function mapear(array, secao, tipo) {
		array.map(elemento =>
			(secao.innerHTML += `
                <article class="${tipo} card">
                    <a class="card__link ${tipo}__link" href="${tipo}.html" data-${tipo}="${elemento.id}">
                        <figure class="card__imagem">
                            <img alt="" src=${elemento.img}>
                        </figure>
                        <div class="card__texto">
                            <h3>${elemento.titulo}</h3>
                            <div>${elemento.descricao}</div>
                        </div>
                    </a>
                </article>
            `)
		)
    }
    
    const projetos = organizar(projetosDados, 'atualizacao')
    const posts = organizar(blogposts, 'publicacao')

    mapear(projetos, secProjetos, 'projeto')
    mapear(posts, secBlog, 'blog')
}
