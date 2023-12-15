const projetosLinks = document.querySelectorAll('.projeto__link');

projetosLinks.forEach(link => {
    link.addEventListener('click', () => {
        localStorage.setItem("projetoID", `${link.dataset.pagina}`)
    })
})