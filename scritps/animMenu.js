// ! Código gerado pelo ChatgPT
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
// ! - - - - - - -

// const botaoContato = document.querySelector("#contate-me")

// window.addEventListener('scroll', () => {
//   const currentPosition = window.scrollY

//   if (currentPosition >= 300) {
//     botaoContato.classList.remove('transparente')
//   } else {
//     botaoContato.classList.add('transparente')
//   }
// });
