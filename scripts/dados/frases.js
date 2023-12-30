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
    },
    {
        frase: "Programs must be written for people to read, and only incidentally for machines to execute.",
        autor: "Harold Abelson"
    },
    {
        frase: "The best way to predict the future is to invent it.",
        autor: "Alan Kay"
    },
    {
        frase: "A melhor maneira de prever o futuro é inventá-lo.",
        autor: "Alan Kay"
    },
    {
        frase: "Qualquer tolo pode escrever código que um computador pode entender. Bons programadores escrevem código que os humanos podem entender.",
        autor: "Martin Fowler"
    },
    {
        frase: "A arte de programar é a arte de organizar a complexidade, de dominar a multidão e evitar seu caos bastardo da forma mais eficaz possível.",
        autor: "Edsger W. Dijkstra"
    },
    {
        frase: "Você pode não pensar que programadores são artistas, mas programar é uma profissão extremamente criativa. É criatividade baseada na lógica.",
        autor: "John Romero"
    },
    {
        frase: "A programação é fácil de aprender, mas difícil de dominar.",
        autor: "Desconhecido"
    },
    {
        frase: "Depurar é como ser detetive num filme policial em que também és o assassino.",
        autor: "Filipe Fortes"
    },
    {
        frase: "A frase mais perigosa na língua é 'sempre fizemos assim'.",
        autor: "Grace Hopper"
    },
    {
        frase: "Programação não é sobre digitar, é sobre pensar.",
        autor: "Rich Hickey"
    },
    {
        frase: "Todo grande desenvolvedor que você conhece chegou lá resolvendo problemas que eles não estavam qualificados para resolver até que realmente o fizessem.",
        autor: "Patrick McKenzie"
    },
    {
        frase: "Código é como piada. Se você precisa explicar, então é ruim.",
        autor: "Cory House"},
    {
        frase: "Todo mundo deve aprender a programar, isso ensina a pensar.",
        autor: "Steve Jobs"
    },
    {
        frase: "A programação é um dos ramos mais importantes da matemática aplicada.",
        autor: "Donald Knuth"},
    {
        frase: "Há apenas duas coisas difíceis na Ciência da Computação: invalidação de cache e nomenclatura.",
        autor: "Phil Karlton"
    },
    {
        frase: "Não é um bug, é um recurso não documentado.",
        autor: "Desconhecido"
    },
    {
        frase: "O computador é a ferramenta mais notável que já criamos. É o equivalente a uma bicicleta para nossas mentes.",
        autor: "Steve Jobs"
    },
    {
        frase: "Os programadores estão constantemente enfrentando novos desafios à medida que a tecnologia evolui. O futuro da programação está cheio de possibilidades empolgantes, e o único limite é a nossa imaginação.",
        autor: "Mevan Babakar"
    },
    {
        frase: "A programação é a nova alfabetização. Precisamos aprender a ler, escrever e codificar.",
        autor: "Steve Jobs"
    },
    {
        frase: "A programação permite pensar em problemas e encontrar soluções de forma estruturada. É uma ferramenta poderosa para inovação e progresso.",
        autor: "Mark Zuckerberg"
    },
    {
        frase: "Os melhores programadores não são necessariamente os que mais sabem sobre programação, mas os que podem trabalhar efetivamente em equipe.",
        autor: "Steve McConnell"
    },
    {
        frase: "No desenvolvimento de software, o aprendizado nunca para. Você deve manter-se constantemente atualizado com as mais recentes tecnologias e linguagens de programação.",
        autor: "Ben Collins-Sussman"
    },
    {
        frase: "A habilidade mais importante para um programador é a capacidade de aprender coisas novas rapidamente.",
        autor: "John Resig"
    },
    {
        frase: "Os melhores programadores são aqueles que conseguem pensar criativamente, aprender rapidamente e se adaptar a novas situações.",
        autor: "Larry Wall"
    },
    {
        frase: "Aprender a programar é útil, não importa quais sejam suas ambições de carreira.",
        autor: "Sheryl Sandberg"
    },
    {
        frase: "Como programadores, nunca devemos parar de aprender e crescer. As possibilidades são infinitas, e o único limite é a nossa vontade de aprender.",
        autor: "Steve Ballmer"
    },
    {
        frase: "Código é poder. Pode mudar o mundo.",
        autor: "Desconhecido"
    },
    {
        frase: "Codificar não é apenas criar software, é resolver problemas.",
        autor: "Ryan Carson"
    },
    {
        frase: "Os programadores têm o poder de automatizar tarefas, resolver problemas complexos e criar novas tecnologias incríveis que podem mudar o mundo.",
        autor: "Mevan Babakar"
    },
    {
        frase: "Código é a poesia de um mundo melhor.",
        autor: "Dominic Krimmer"
    },
    {
        frase: "Programar é uma forma de transformar suas ideias em realidade. Com o código, você tem o poder de criar algo que nunca existiu antes.",
        autor: "Ben Parr"
    }
]

export default frases
