const hoje = new Date();

function encontraIdade(nascimento) {
    let age = hoje.getFullYear() - nascimento.getFullYear();
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