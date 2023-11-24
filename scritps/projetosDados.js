const projetosDados = [
    {
        id: '0',
        nome: 'Vade Mecum',
        link: 'https://github.com/RenanSantos7/Vade-Mecum',
        img: 'assets/vade-mecum.png',
        alt: 'Vade Mecum Tela Principal',
        descrição: '<p>Um projeto de <em>Vade Mecum</em>, o famoso compêndio de leis usados por estudantes e profissionais de Direito.</p>',
        texto: '<p>Um projeto de <em>Vade Mecum</em>, o famoso compêndio de leis usados por estudantes e profissionais de Direito.</p><p>Tem navegação simples e utiliza conceitos de HTML5, CSS3 e JavaScript para criar uma experiência de usuário única, preocupada com a legibilidade e acessibilidade.</p><figure><img src="assets/cf.png" alt="Vade Mecum Tela Lei"><figcaption>Constituição Federal</figcaption></figure><figure><img src="assets/cc.png" alt="Código Civil Vade Mecum"><figcaption>Código Civil</figcaption></figure><p>Ainda há modo escuro automático, que se adapta à escolha do usuário para seu sistema</p><figure><img alt="CPC no modo escuro com menu lateral" src="https://github.com/RenanSantos7/Vade-Mecum/blob/main/prints/cpc.png"><figcaption>CPC no modo escuro com menu lateral</figcaption></figure><h2>Interface mobile</h2><figure><img src="https://github.com/RenanSantos7/Vade-Mecum/blob/main/prints/home-mobile.png" alt="Tela principal no celular"><figcaption>Tela principal no celular</figcaption></figure><h2>Funcionalidades</h2><ul><li>Layout atual e responsivo;</li><li>Modo escuro;</li><li>Melhor legibilidade;</li><li>Adaptado para telas ultrawide</li><li>Facilidade de uso.</li></ul>'
    },
    
    {
        id: '1',
        nome: 'Cardápio Pizzaria',
        link: 'https://github.com/RenanSantos7/Cardapio-QRCODE',
        img: 'assets/Captura-Cardapio.jpeg',
        alt: 'Vade Mecum Tela Principal',
        descrição: '<p>Um cardápio de pizzaria para ser usado com QRCode.</p>',
        texto: '<p>Um cardápio de pizzaria para ser usado com QRCode.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, fuga. Assumenda accusamus et secum iure quidem, aliquid facilis corporis nostrum a deserunt ipsa, aliquam ea iusto natus nisi.</p>'
    },

    {
        id: '2',
        nome: 'Calculadora',
        link: 'https://github.com/RenanSantos7/Calculadora-JS',
        img: 'assets/calculadora.png',
        alt: 'Calculadora Tela Principal',
        descrição: '<p>Uma calculadora simples usando conceitos moderos de CSS3 e JavaScript.</p>',
        texto: '<p>Uma calculadora simples usando conceitos moderos de CSS3 e JavaScript.</p><p>Os números estão dispostos em <code>CSS grid</code>, o que torna todo o código HTML mais simples e fácil de programar no JavaScript.</p><p>Executa operações de soma, multiplicação, divisão e subtração.</p>'
    },

    {
        id: '3',
        nome: 'Gerador de Tabelas',
        link: 'https://github.com/RenanSantos7/Gerador-de-tabelas',
        img: 'assets/gerador-tabela1.png',
        alt: 'Gerador de tabelas',
        descrição: '<p>Uma maneira fácil e rápida de gerar tabelas em <code>html</code></p>',
        texto: '<p>Sabe quando você precisa criar uma tabela em HTML? Não dá um trabalhão digitar TRs e TDs? Esse projeto te ajuda a simplificar esse processo. Basta definir o número de linhas e colunas e a tabela é gerada.</p><h2>Como Usar</h2><p>É muito simples usar o Gerador de Tabelas. Primeiro, defina o número de linhas e colunas e clique no botão "Gerar!"</p><p>Depois, uma tabela é gerada na página. Basta clicar em cada célular para editar seu conteúdo.</p><figure><img alt="Tela 1" src="assets/gerador-tabela2.png"></figure><p>Nessa tela você deve ainda selecionar se a tabela é no sentido vertical (com os títulos da tabela na primeira linha) ou horizontal (com os títulos na primeira coluna). O padrão é o sentido vertical.</p><p>Por fim, quando você clicar no botão "Gerar código", o código é exibido para você. Você pode selecionar o texto e copiá-lo ou clicar em &quot;Copiar&quot;.</p><figure><img alt="Tela 2" src="assets/gerador-tabela3.png"></figure><h2>Github Pages</h2><p>O projeto está disponível através do <a href="https://renansantos7.github.io/Gerador-de-tabelas/">Github Pages</a>.</p>'
    },

    {
        id: '4',
        nome: 'Número Secreto',
        link: 'https://github.com/RenanSantos7/numero-secreto',
        img: 'https://github.com/RenanSantos7/numero-secreto/raw/main/screenshots/tela-jogo.jpg',
        alt: 'Número Secreto. Chute reconhecido',
        descrição: '<p>Um jogo bem divertido desenvolvido no curso <i>"JavaScript: validações e reconhecimento de voz"</i> da Alura, com o professor Guilherme Lima</p>',
        texto: '<p>Um projeto feito para o curso &quot;<strong>JavaScript: validações e reconhecimento de voz</strong>&quot; da #Alura com o professor Guilherme Lima.</p><p>Trata-se de um jogo bastante divertido em que se usa a Web Speech API para reconhecimento de voz. Você fala um número até acertar o número secreto que ele sorteou!</p><p>Aproveite e divirta-se!</p><p>O projeto está disponível pelo <a href="https://numero-secreto-git-main-renansantos7.vercel.app/">Vercel</a>.</p>'
    },
    
    {
        id: '5',
        nome: 'Alura Play',
        link: 'https://github.com/RenanSantos7/curso-requisi-es-javascript-alura',
        img: 'https://camo.githubusercontent.com/265a1c9f8574dcf63c1a9de7c86d5d414a9ceec5c424c43ba21aa556c2a38c03/68747470733a2f2f696d6775722e636f6d2f61796d784573682e706e67',
        alt: 'Interface principal do alurapplay',
        descrição: '<p>Um projeto criado para o curso <i>"JavaScript: criando requisições"</i> da Alura.</p>',
        texto: '<p>Projeto criado para o curso &quot;<b>JavaScript: criando requisições</b>&quot; da Alura.</p><p>Contém página inicial e formulário de cadastro de vídeos da AluraPlay, uma plataforma de compartilhamento de vídeos.</p><p>Tecnologias utilizadas durante o curso:</p><ul><li>Javascript</li><li>NodeJS</li><li>Json-server</li></ul><p>Tecnologias utilizadas no projeto</p><ul><li>HTML</li><li>CSS</li></ul><p>Tecnologia que eu acrescentei ao projeot</p><ul><li>ESLint</li></ul>',
        data: '2023-10-20'
    },

    {
        id: '6',
        nome: 'Alura SPA',
        link: 'https://github.com/RenanSantos7/alura-spa',
        img: 'https://github.com/RenanSantos7/alura-spa/blob/main/screenshots/Screenshot%201.png?raw=true',
        descrição: '<p>Um projeto criado para o curso "SASS: CSS sintaticamente espetacular" da Alura.</p>',
        alt: 'Tela Principal',
        texto: '<p>Um projeto criado para o curso <i>SASS: CSS sintaticamente espetacular</i> da Alura.</p><p>SASSS é um pré-processador de CSS, o que significa que ele ajuda você a desenvolver os estilos de uma página web e gera o código CSS que irá de fato ser lido pelo navegador.</p><p>Sua utilidade é meio polêmica e eu me filio a corrente de que ele não é necessário se você já conhece bastante de CSS. De qualquer forma, muitas vezes a escolha pelo uso dessa tecnologia não será sua e sim da equipe, então é sempre bom conhecê-la.</p><figure><img src="https://github.com/RenanSantos7/alura-spa/blob/main/screenshots/Screenshot%202.png?raw=true" alt="página web Alura Spa"></figure>',
        data: '2023-10-25'
    },

    {
        id: '7',
        nome: 'Organo APP',
        link: 'https://github.com/RenanSantos7/organo-app',
        img: './assets/organo-app.jpg',
        alt: 'Tela do Organao App',
        descrição: '<p>Um aplicativo desenvolvido em React para o curso "React: desenvolvendo com JavaScript" da #alura.</p>',
        texto: '<p>Esse é meu primeiro projeto usando React.js, o mais famoso framework de Javascript da atualidade. Foi muito interessante desenvolvê-lo pela curiosidade de aprender uma nova tecnologia. Além disso a didático do Professor Vinicios Neves foi muito boa, dando dicas muito legais de desenvolvimento e de uso do VSCode, sem contar sua participação ativa no Fórum do curso, sempre respondendo perguntas e dando <em>feedback</em> sobre a nossa evolução.</p><figure><img src="./assets//organo-app2.jpg" alt="Colabores cadastrados no Organo App"><figcaption>Colabores cadastrados no Organo App</figcaption></figure><p>Trata-se de um app React com o objetivo de cadastrar os colaboradores da Alura. Alguns já está cadastrados por padrão, mas você pode colocar mais se quiser.</p><p>O projeto está disponível em <a href="https://react-organo-app.vercel.app/">https://react-organo-app.vercel.app/</a> (Deploy pelo Vercel)</p>',
        data: '2023-11-22'
    }
]

export default projetosDados
