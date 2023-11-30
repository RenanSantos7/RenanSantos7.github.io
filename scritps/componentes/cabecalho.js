export default function cabecalho() {
    const elHeader = document.querySelector('.cabecalho')

    elHeader.innerHTML = `
        <a id="contate-me" href="contato.html">Contate-me</a>
        <a href="../index.html">Início</a>
        <div class="links">
            <a href="../index.html#sobre-mim">Sobre mim</a>
            <a href="https://www.linkedin.com/in/renan-santos-7332b5255/" id="LinkedIn" title="LinkedIn">
                <i class="fa-brands fa-linkedin"></i>
            </a>
            <a id="github" href="https://github.com/RenanSantos7" title="Github">
                <i class="fa-brands fa-github"></i>
            </a>
        </div>
    `
}
