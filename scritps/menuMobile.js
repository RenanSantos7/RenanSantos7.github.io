export default function menuMobile() {
    const contateMe = document.querySelector('#contate-me')
    const links = document.querySelector('.links')
    const elDivLinksInternos = document.querySelector('.links__internos')
    const elLinksDivisoria = document.querySelector('.links__divisoria')
    const elDivLinksExternos = document.querySelector('.links__externos')

    const elementos = [contateMe, elDivLinksInternos, elLinksDivisoria, elDivLinksExternos]

    if (window.innerWidth <= 700 || screen.width <= 700) {
        elementos.forEach(elemento => elemento.classList.add('oculto'))

        acrescentaDiv()
        criaMenu()
    }
    
    else {
        elementos.forEach(elemento => elemento.classList.remove('oculto'))
        document.querySelector('.links__btn').classList.add('oculto')
        document.querySelector('.links__container').classList.add('oculto')
    }

    function acrescentaDiv() {
        links.innerHTML = `
            <i class='fa-solid fa-bars links__btn'></i>
            <div class='links__container'></div>
        `;
    }

    
    function criaMenu() {
        const linksContainer = document.querySelector('.links__container')
        linksContainer.innerHTML = `
            <a id='contate-me' class='nav-link' href='contato.html'>Contate-me</a>
            
            <div class='links'>
                <div class='links__internos'>
                    <a class='nav-link' href='#sobre-mim'>Sobre mim</a>
                    <a class='nav-link' href='#projetos'>Projetos</a>
                    <a class='nav-link' href='#blog'>Blog</a>
                </div>
            
            <hr />
            
                <div class='links__externos'>
                    <a target='_blank' rel='noopener' aria-label='LinkedIn' id='LinkedIn' class='nav-link' href='https://www.linkedin.com/in/renan-santos-7332b5255/'>
                    <i class='fa-brands fa-linkedin'></i>
                    </a>                
                    <a target='_blank' rel='noopener' id='github' class='nav-link' aria-label='Github' href='https://github.com/RenanSantos7'>
                    <i class='fa-brands fa-github'></i>
                    </a>
                </div>
            </div>
        `
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', ocultaMenu)
        })
        
        function ocultaMenu() {
            linksContainer.style.top = '-400px'
        }

        const linksBtn = document.querySelector('.links__btn')
        let menuAberto = false
        linksBtn.addEventListener('click', () => {
            if (menuAberto) {
                ocultaMenu()
            } else {
                linksContainer.style.top = 0
            }

            menuAberto = !menuAberto
        })
    }
}
