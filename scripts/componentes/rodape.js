export default function rodape() {
    const elRodape = document.querySelector('.rodape')

    elRodape.innerHTML = `
        <a href="mailto:renansantos.jus@gmail.com" class="footer__contato">
            <i class="fa-solid fa-envelope"></i>
            Email
        </a>
        <a href="https://www.linkedin.com/in/renan-santos-7332b5255/" class="footer__contato" id="footer__LinkedIn">
            <i class="fa-brands fa-linkedin"></i>
            Linkedin
        </a>
        <a class="footer__contato" id="footer__github" href="https://github.com/RenanSantos7">
            <i class="fa-brands fa-github"></i>
            Github
        </a>
    `
}