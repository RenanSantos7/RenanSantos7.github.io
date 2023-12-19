export default function menuMobile() {
    const contateMe = document.querySelector('#contate-me')
    const links = document.querySelector('.links')

    //const elementos = [contateMe, elDivLinksInternos, elLinksDivisoria, elDivLinksExternos]
    const elementos = [contateMe, links]

    // Cria uma media query que verifica se a largura da tela é menor que 700 pixels
    var mediaQuery = window.matchMedia('(max-width: 700px)')

    // Adiciona um evento que chama a função aoRedimensionar() sempre que a media query mudar
    mediaQuery.addListener(aoRedimensionar)

    // Chama a função aoRedimensionar() pela primeira vez
    aoRedimensionar()
    
    function aoRedimensionar() {
        const linksBtn = document.querySelector('.links__btn')
        const linksContainer = document.querySelector('.links__container')

        if (mediaQuery.matches) {
            elementos.forEach(elemento => elemento.classList.add('oculto'))
    
            acrescentaBotao()
            criaMenu()
        } else {
            elementos.forEach(elemento => elemento.classList.remove('oculto'))
            
            if (linksBtn && linksContainer){
                linksBtn.remove('oculto')
                linksContainer.remove('oculto')
            }
        }
    }
    
    function acrescentaBotao() {
        links.innerHTML += `
            <div class='links__btn'>
                <i class='fa-solid fa-bars links__btn__ico'></i>
            </div>
           
            <div class='links__container'></div>
        `
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
            
            <hr class='links__divisoria' />

            <div class='links__externos'>
                <a target='_blank' rel='noopener' aria-label='LinkedIn' id='LinkedIn' href='https://www.linkedin.com/in/renan-santos-7332b5255/'>
                    <i class='fa-brands fa-linkedin' aria-hidden='true'></i>
                </a>                
                <a target='_blank' rel='noopener' id='github' aria-label='Github' href='https://github.com/RenanSantos7'>
                    <i class='fa-brands fa-github' aria-hidden='true'></i>
                </a>
            </div>
            </div>
        `
        const navLinks = document.querySelectorAll('.nav-link')
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
