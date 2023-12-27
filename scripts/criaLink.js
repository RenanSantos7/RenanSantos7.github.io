const projetosLinks = document.querySelectorAll('.projeto__link');
const blogLinks = document.querySelectorAll('.blog__link');

projetosLinks.forEach(link => {
    link.addEventListener('click', () => {
        localStorage.setItem("projetoID", `${link.dataset.projeto}`)
    })
})

blogLinks.forEach(link => {
    link.addEventListener('click', () => {
        localStorage.setItem("blogID", `${link.dataset.blog}`)
    })
})