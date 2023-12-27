import projetosDados from './projetosDados.js'
import blogposts from './componentes/blogposts.js'

console.log(blogposts)

export default function listaProjetos() {
	const secProjetos = document.querySelector('#projetos-container')
	const secBlog = document.querySelector('#posts-container')

    function organizar(array, prop) {
        const arrayOrganizado = array.sort((a, b) => {
            return a.prop < b.prop ? -1 : a.prop > b.prop ? 1 : 0
        })
        arrayOrganizado.reverse()
        const arrayFinal = arrayOrganizado.slice(0, 12)
        return arrayFinal.reverse
    }

	function mapear(array, secao,) {
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
    
    const projetos = organizar(projetosDados, atualizacao)
    const posts = organizar(blogposts, publicacao)
}
