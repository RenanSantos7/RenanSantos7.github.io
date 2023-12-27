/**
 @description Componente que monta o cabeçalho da página
 **/
export default function cabecalho() {
	const elHeader = document.querySelector('.cabecalho')

	if (elHeader) {
		elHeader.innerHTML = `
            <a id="contate-me" href="contato.html">Contate-me</a>
            <div class='links'>
                <div class="links__internos">
                    <a class="nav-link" href="../index.html">Início</a>
                    <a class="nav-link" href="../index.html#sobre-mim">Sobre mim</a>
                    <a class="nav-link" href="../index.html#projetos">Projetos</a>
                    <a class="nav-link" href="../index.html#blog">Blog</a>
                </div>
                
                <hr class="links__divisoria" />
                
                <div class="links__externos">
                    <a target="_blank" rel="noopener" aria-label="LinkedIn" id="LinkedIn" href="https://www.linkedin.com/in/renan-santos-7332b5255/">
                        <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
                    </a>                
                    <a target="_blank" rel="noopener" id="github" aria-label="Github" href="https://github.com/RenanSantos7">
                        <i class="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        `
	}
}
