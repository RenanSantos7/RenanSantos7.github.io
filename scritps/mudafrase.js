
const frases = [
    "Is studying computer science the best way to prepare to be a programmer? No. the best way to prepare is to write programs, and to study great programs that other people have written.",
    "Software is like sex; it's better when it's free.",
    "I never in my wildest dreams would have predicted the evolution of the Internet and I never would've predicted the degree to which corporate influence over the Internet has changed its character over time.",
    "You've got to start with the customer experience and work back toward the technology — not the other way around",
    "Professionalism has no place in art, and hacking is art. Software Engineering might be science; but that's not what I do. I'm a hacker, not an engineer.",
    "Em qualquer era da historia todo dia sai alguém procurando o trouxa da vez. Apenas se certifique de que o trouxa não é você",
    "Não é a linguagem de programação que define o programador, mas sim sua lógica.",
    "Só por que alguma coisa não faz o que você planejou que ela fizesse não quer dizer que ela seja inútil.",
    "Programadores e artistas são os únicos profissionais que tem como hobby a própria profissão.",
    "Saber não é o bastante, devemos aplicar. Disposição não é o suficiente, devemos fazer.",
    "Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.",
    "Não se preocupe se não funcionar corretamente. Se tudo acontecesse, você ficaria sem emprego.",
    "Faça como um programador. Quando tudo está errado e confuso, apague tudo e recomece do zero.",
    "Most programming languages contain good parts and bad parts. I discovered that I could be better programmer by using only the good parts and avoiding the bad parts."
];

const autores = [
    "Bill Gates",
    "Linus Torvalds",
    "L Peter Deutsch",
    "Steve Jobs",
    "Jamie Zawinski",
    "Fabio Akita",
    "David Ribeiro Guilherme",
    "Thomas Edison",
    "Rafael Lain",
    "Johann Wolfgang von Goethe",
    "Henry Ford",
    "Lei de Mosher",
    "Orlando Cordeiro",
    "Douglas Crockford"
];

const citacao = document.querySelector('#citacao');
const autor = document.querySelector('#autor');

function geraInteiroAleatorio(min, max) { //esta função exclui o valor máximo
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function mudaFrase() {
    let i = geraInteiroAleatorio(0, frases.length);
    citacao.textContent = frases[i];
    autor.textContent = autores[i];
}

document.addEventListener('load', mudaFrase());