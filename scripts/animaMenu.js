export default function animaMenu() {
    if (navigator.userAgent.indexOf('Firefox') > -1) {
        const menu = document.querySelector('.cabecalho');

        window.addEventListener('scroll', () => {
          const currentPosition = window.scrollY;
      
          if (currentPosition >= 200) {
            menu.classList.add('menu-scroll');
          } else {
            menu.classList.remove('menu-scroll');
          }
        });
    }
}
