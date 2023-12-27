import cabecalho from './componentes/cabecalho.js'
import rodape from './componentes/rodape.js'
//import menuMobile from './menuMobile.js'
import animaMenu from './animaMenu.js'
import blogposts from './componentes/blogposts.js'

const pagina = parseInt(localStorage.getItem('blogID'))

const postSelecionado = blogposts.find(post => post.id === pagina)

function extraiData(string) {
	const dataUs = new Date(string)
	const dia = dataUs.getDate().toString().padStart(2, '0')
	const mes = dataUs.getMonth().toString().padStart(2, '0')
	const ano = dataUs.getFullYear()

	return `${dia}/${mes}/${ano}`
}

/** 
 @description Monta a página de post
 **/
function montaPost(post) {
	const postHeader = document.querySelector('.blog-post__header')
	const elPostTitle = document.querySelector('.blog-post__title')
	const elPostPub = document.querySelector('.blog-post__publication')
	const elTagList = document.querySelector('.list-tags')
	const elPost = document.querySelector('.blog-post__corpo')

	postHeader.style.backgroundImage = `url(${post.img})`
	elPostTitle.textContent = post.titulo
	elPostPub.textContent = extraiData(post.publicacao)
	post.tagList.forEach(tag => {
		elTagList.innerHTML += `<a class="tag">#${tag}</a>`
	})
	elPost.innerHTML = post.conteudo
}

cabecalho()
montaPost(postSelecionado)
rodape()
animaMenu()
