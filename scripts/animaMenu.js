/** 
  @description recria a animação do menu em JavaScript no Firefox
**/
export default function animaMenu() {
    if (navigator.userAgent.indexOf('Firefox') > -1) {
        const menu = document.querySelector('.cabecalho');

        window.addEventListener('scroll', () => {
          const currentPosition = window.scrollY

          if (currentPosition >= 100) {
            menu.classList.add('menu-scroll')
          } else {
            menu.classList.remove('menu-scroll')
          }
        })
    }
}
