import projetosDados from './componentes/projetosDados.js'
import blogposts from './componentes/blogposts.js'

export default function listaCards() {
	const secProjetos = document.querySelector('#projetos-container')
	const secBlog = document.querySelector('#posts-container')

    function organizar(array, prop) {
        const arrayOrganizado = array.sort((a, b) => {
            const dateA = new Date(`${a[prop]}`)
            const dateB = new Date(`${b[prop]}`)
            return dateA < dateB ? 1 : dateA > dateB ? -1 : 0
        })
        arrayOrganizado.reverse()
        const arrayFinal = arrayOrganizado.slice(0, 12)
        return arrayFinal.reverse()
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
