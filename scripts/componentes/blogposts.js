const posts = [
    {
        id: 0,
        titulo: 'Olá mundo',
        publicacao: '10/17/2023',
        tagList: ['geral', 'texto', 'teste'],
        img: 'https://images.unsplash.com/photo-1579600161224-cac5a2971069',
        descricao: '<p>Seguindo a velha regra da informática de que ao começar algo novo, se deve começar com essa mensagem, lá vai: Olá Mundo!</p>',
        conteudo: 
            '<p>Seguindo a velha regra da informática de que ao começar algo novo, se deve começar com essa mensagem, lá vai:</p><p>Olá Mundo!</p><p>Esse é um blog em que eu estarei mais preocupado em escrever do que em ser lido.Mas se por um acaso você estiver lendo, não se sinta tímido para enviar seu feedback.No rodapé da página tem meu email.</p><p>A verdade é que esse blog é mais um desafio para eu aprender a desenvolver para a web, pois ele está sendo feito todo do <b>zero</b>, sem uma plataforma para ajudar como Blogger ou Wordpress. </p><p>Por quê? A pergunta certa não é "por quê?". É: "por que não?"</p>'
    },
    
    {
        id: 1,
        titulo: 'Por que sempre tem um hater de React?',
        publicacao: '12/09/2023',
        tagList: ['react', 'javascript'],
        img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
        descricao: '<p><em>Por que sempre tem um hater de React?</em>&nbsp; Li um desses num evento no Discord da Alura. Eu respondi que...</p>',
        conteudo: 
            ' <p>O React é uma biblioteca de desenvolvimento para web apps com Javascript desenvolvida pelo <em>Facebook</em> (hoje, <em>Meta</em>) que virou um sucesso na comunidade front-end, sendo hoje um das tecnologias mais buscada em vagas nessa área.</p><p>Apesar de todo esse sucesso, não faltam críticas. <em>Por que sempre tem um hater de React?</em> Li um desses num evento no Discord da Alura. "<em>Por que ele cria muitas complicações demais pro desenvolvedor pra pouca vantagem pro usuário</em>", respondi.</p><p>Nesse primeiro momento tendo contato com a biblioteca é essa minha impressão, mas pensando melhor acho que o React não é o problema em si, mas sim o seu uso indiscriminado. Não é qualquer <em>site</em> que <strong>precisa</strong> usar React. A função dele é criar <em>webapps</em>, ou seja aplicativos baseados na web e que rodam no navegador. Se você vai simplesmente criar um portifólio, uma <em>landing page</em> ou algo do tipo, com certeza fará muito mais sentido usar o bom HTML5 "vanilla" e seus inseparáveis companheiros, JavaScript e CSS.</p><p>Agora se, por algum motivo, seu <em>site</em> se aproxima de um aplicativo, como um <em>e-commerce</em> ou outra coisa do tipo, aí sim nosso amigo React pode te ajudar.</p><p>Além disso, a lógica da componentização não está presa a ele, podendo ser muito bem ser aplicada com outras tecnologias. No JS padrão, por exemplo, não é mais tão trabalhoso acrescentar e manipular elementos da página. <em>Template strings</em> estão aí para isso! Nesse mesmo <em>site</em> eu uso bastante componentização apenas com JS.</p><p>Enfim, tudo tem sua hora e seu lugar e não é preciso odiar o React e sim compreender o propósito dele, para melhor utilizá-lo.</p>'
    },
    
    {
        id: 0,
        titulo: 'Meu 2023',
        publicacao: '12/26/2023',
        tagList: ['geral'],
        img: './assets/blog/edge-vscode.jpg',
        descricao: '<p>Se algo marcou meu 2023, com certeza foram as mudanças. Tanto na vida pessoal quanto na profissional eu precisei me redescobrir.</p>',
        conteudo: 
            '<p>Se algo marcou meu 2023, com certeza foram as mudanças. Tanto na vida pessoal quanto na profissional eu precisei me redescobrir. Buscar lá atrás quem eu seria a partir de agora. E algo que era apenas um hobby há um anos eu decidi que seria minha próxima profissão.</p><p>E em então fui em busca de um sonho que eu não sabia que tinha. A programação me conquistou muito mais do que o Direito jamais fez. Não se trata da promessa fácil de dinheiro que muitos vendem na Internet, mas realmente um vocação que eu descobri esse ano.</p><p>Como eu conto na sessão <a href="index.html#sobre-mim">"Sobre mim"</a>, sou formado em Direito e advogo desde 2012, mas recentemente surgiu em mim uma vontade de mudar de carreira. E acabei escolhendo algo que eu tinha começado a aprender por <i>hobby</i>: o desenvolvimento para web. Assim que me formei comecei a aprender a mexer com HTML para criar um <i>Vade Mecum</i>, pois não queria mais comprar um todo ano se eu podia simplesmente armazená-los no meu PC. Foi então que fui gradativamente me aprofundando no assunto e descobrindo a magia do CSS. Mas tinha parado por aí, o JavaScript era um pouco mais complexo e decidi deixá-lo para depois.</p><p>E então esse ano comecei efetivamente a me dedicar a estudar programação com mais afinco, começando pelo Curso de Lógica de Programação do canal <b>Curso em Vídeo</b> do Professor Gustavo Guanabara. Era a base cuja falta me dificultou aprender JS lá atrás. Foi muito bom começar com o bom e velho Guanabara, devido a sua didática e o desejo de que a gente realmente aprenda.</p><p>O passo seguinte foi partir para cursos pagos, pois o conteúdo gratuito muitas vezes é pouco e/ou esparso. Cursos pagos são mais interessantes para quem está iniciando devido à organização dos assuntos e por você estar com profissionais de auxiliando na tua jornada de aprendizado, o que sem dúvida é melhor do que andar sozinho. E acredito que foi um ano bem proveitoso na Alura, anto que vários dos projetos que tenho aqui no meu portifólio foram feitos lá:</p><figure><img src="../assets/blog/Retrospectiva%202023%20Alura.jpg" alt="Retrospectiva 2023 na Alura" /><figcaption>Retrospectiva 2023 na Alura</figcaption></figure><p>Também foi um ano de eu voltar para o LinkedIn. Não sei ainda se estou usando ele da forma mais correta, mas de qualquer forma, no momento, estou interessado mais em me qualificar do que em buscar um emprego na área, afinal ainda estou advogando. É como diz minha psicóloga: você amanhã vai se arrepender do que não começou hoje, então melhor mal feito do que não feito.</p><p>E 2024, acho que será o ano para começar a colher os esforços desse ano. De sair da curva e seguir nessa nova estrada.</p>'
    },
    
]

export default posts