const projetosLinks = document.querySelectorAll('.projeto__link');

projetosLinks.forEach(link => {
    link.addEventListener('click', () => {
        localStorage.setItem("projetoID", `${link.dataset.pagina}`)
    })
})

const blogLinks = document.querySelectorAll('.blog__link');

blogLinks.forEach(link => {
    link.addEventListener('click', () => {
        localStorage.setItem("blogID", `${link.dataset.post}`)
    })
})
