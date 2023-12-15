export default function animaMenu() {
  const menu = document.querySelector('.cabecalho');

  window.addEventListener('scroll', () => {
    // Verifique a posição atual da rolagem
    const currentPosition = window.scrollY;

    if (currentPosition >= 200) {
      menu.classList.add('menu-scroll');
    } else {
      menu.classList.remove('menu-scroll');
    }
  });
}
