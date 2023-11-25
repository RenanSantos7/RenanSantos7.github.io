import blogPosts from './blogdb.js'

const pagina = parseInt(localStorage.getItem('blogID'))

montaPagina(blogPosts[pagina])

function montaPagina(post) {

    const header = document.querySelector('.blog-post__header')
    const title = document.querySelector('.blog-post__title')
    const elPublicationDate = document.querySelector('.blog-post__publication')
    const elTagList = document.querySelector('.list-tags')
    const tagList = post.tags
    const elPost = document.querySelector('.blog-post__corpo')
    
    title.textContent = post.title
    header.style.backgroundImage = `url(${post.imageURL})`
    elPublicationDate.textContent = formatarData(post.publicationDate)

    elTagList.innerHTML = tagList.map(tag => {
        `<span class="tag">#${tag}</span>`
    })

    elPost.innerHTML = post.text
}

function formatarData(dataStr) {
    const data = new Date(dataStr)
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}