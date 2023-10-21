// % SAUDAÇÃO
const hoje = new Date();

function encontraIdade(nascimento) {
    const age = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      age--;
    }
    return age;
}
  
const idade = encontraIdade(new Date("1990-03-08"));
const spanIdade = document.getElementById('idade');
const spanSaudacao = document.getElementById('saudacao');

spanIdade.textContent = idade;

var saudacao = "";
if (hoje.getHours < 12) {
    saudacao = "Bom dia";
} else if (12 <= hoje.getHours() < 18) {
    saudacao = "Boa tarde";
} else {
    saudacao = "Boa noite"
}

spanSaudacao.textContent = saudacao;

// % PROJETOS

const projetosLinks = document.querySelectorAll('.projeto__link');

projetosLinks.forEach((link) => {
    link.addEventListener('click', () => {
        localStorage.setItem("projetoID", link.dataset.pagina)
    })
}) 

// % Menu muda quando rola

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

const botaoContato = document.querySelector("#contate-me")

window.addEventListener('scroll', () => {
  const currentPosition = window.scrollY

  if (currentPosition >= 300) {
    botaoContato.classList.remove('transparente')
  } else {
    botaoContato.classList.add('transparente')
  }
});