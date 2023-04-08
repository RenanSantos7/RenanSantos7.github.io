// % SAUDAÇÃO
const nascimento = new Date(1990, 02, 08);
const hoje = new Date(2023, 01, 01);
const idade = hoje.getFullYear() - nascimento.getFullYear();
const spanIdade = document.getElementById('idade');
const spanSaudacao = document.getElementById('saudacao');

spanIdade.textContent = idade;

var saudacao = "";
if (hoje.getHours < 12) {
    var saudacao = "Bom dia";
} else if (12 <= hoje.getHours() < 18) {
    var saudacao = "Boa tarde";
} else {
    var saudacao = "Boa noite"
}

spanSaudacao.textContent = saudacao;

// % CARROSSEL
const controles = document.querySelectorAll('.controle');
const projetos = document.querySelectorAll('.projeto');
const numProjetos = projetos.length;
let projetoExibido = 0;

controles.forEach(controle => {
    controle.addEventListener('click', function () {
        if (controle.id == "arrow-left") {
            projetoExibido -= 1;
        } else {
            projetoExibido += 1;
        }

        if (projetoExibido >= numProjetos) {
            projetoExibido = 0;
        }

        if (projetoExibido < 0) {
            projetoExibido = numProjetos -1;
        }

        projetos.forEach(projeto => {
            projeto.classList.remove('projeto-exibido');
        });

        projetos[projetoExibido].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        });

        projetos[projetoExibido].classList.add('projeto-exibido');
    });
});