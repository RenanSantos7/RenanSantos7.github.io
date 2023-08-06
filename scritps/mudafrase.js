const frases = [
    {
        frase: "Is studying computer science the best way to prepare to be a programmer? No. the best way to prepare is to write programs, and to study great programs that other people have written.",
        autor: "Bill Gates"
    },
    {
        frase: "Software is like sex; it's better when it's free.",
        autor: "Linus Torvalds"
    },
    {
        frase: "I never in my wildest dreams would have predicted the evolution of the Internet and I never would've predicted the degree to which corporate influence over the Internet has changed its character over time.",
        autor: "L Peter Deutsch"
    },
    {
        frase: "You've got to start with the customer experience and work back toward the technology — not the other way around",
        autor: "Steve Jobs"
    },
    {
        frase: "Professionalism has no place in art, and hacking is art. Software Engineering might be science; but that's not what I do. I'm a hacker, not an engineer.",
        autor: "Jamie Zawinski"
    },
    {
        frase: "Em qualquer era da historia todo dia sai alguém procurando o trouxa da vez. Apenas se certifique de que o trouxa não é você",
        autor: "Fabio Akita"
    },
    {
        frase: "Não é a linguagem de programação que define o programador, mas sim sua lógica.",
        autor: "David Ribeiro Guilherme"
    },
    {
        frase: "Só por que alguma coisa não faz o que você planejou que ela fizesse não quer dizer que ela seja inútil.",
        autor: "Thomas Edison"
    },
    {
        frase: "Programadores e artistas são os únicos profissionais que tem como hobby a própria profissão.",
        autor: "Rafael Lain"
    },
    {
        frase: "Saber não é o bastante, devemos aplicar. Disposição não é o suficiente, devemos fazer.",
        autor: "Johann Wolfgang von Goethe"
    },
    {
        frase: "Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.",
        autor: "Henry Ford"
    },
    {
        frase: "Não se preocupe se não funcionar corretamente. Se tudo acontecesse, você ficaria sem emprego.",
        autor: "Lei de Mosher"
    },
    {
        frase: "Faça como um programador. Quando tudo está errado e confuso, apague tudo e recomece do zero.",
        autor: "Orlando Cordeiro"
    },
    {
        frase: "Most programming languages contain good parts and bad parts. I discovered that I could be better programmer by using only the good parts and avoiding the bad parts.",
        autor: "Douglas Crockford"
    },
    {
        frase: "Really good programs live forever.",
        autor: "Charles Simonyi"
    },
    {
        frase: "Whenever I have to think to understand what the code is doing, I ask myself if I can refactor the code to make that understanding more immediately apparent.",
        autor: "Martin Fowler"
    },
    {
        frase: "Falar é fácil, me mostre o código.",
        autor: "Linus Torvalds"
    }
]

const citacao = document.querySelector('#citacao');
const autorCitacao = document.querySelector('#autor');

function geraInteiroAleatorio(min, max) { //esta função exclui o valor máximo
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function mudaFrase() {
    let i = geraInteiroAleatorio(0, frases.length);
    citacao.textContent = frases[i].frase;
    autorCitacao.textContent = frases[i].autor;
}

document.addEventListener('load', mudaFrase());