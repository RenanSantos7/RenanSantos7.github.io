export default function cabecalho() {
    const elHeader = document.querySelector('.cabecalho')

    elHeader.innerHTML = `
        <a id="contate-me" href="contato.html">Contate-me</a>
        <a href="../index.html">Início</a>
        <div class="links">
            <a href="../index.html#sobre-mim">Sobre mim</a>
            <a target="_blank" rel="noopener" aria-label="LinkedIn" id="LinkedIn" href="https://www.linkedin.com/in/renan-santos-7332b5255/">
                <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
            </a>                
            <a target="_blank" rel="noopener" id="github" aria-label="Github" href="https://github.com/RenanSantos7">
                <i class="fa-brands fa-github"  aria-hidden="true"></i>
            </a>
        </div>
    `
}
