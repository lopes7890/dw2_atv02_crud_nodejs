const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/jogos', (req, res) => {
    const jogos = [
        {nome: 'The Last of Us', preco: 199.99},
        {nome: 'Call of Duty: Black Ops 6', preco: 299.99},
        {nome: 'Grand Theft Auto 6', preco: 399.99},
        {nome: 'Mortal Kombat 1', preco: 199.99},
        {nome: 'Bully', preco: 149.99}
    ];
    res.render('jogos', { jogos });
});

app.get('/sobre', (req, res) => {
    const sobre = [
        {nome: 'The Last of Us', descricao: 'The Last of Us é um jogo de ação e aventura desenvolvido pela Naughty Dog e publicado pela Sony Computer Entertainment. Lançado em 2013, o jogo se passa em um mundo pós-apocalíptico devastado por uma infecção fúngica que transformou grande parte da população em criaturas agressivas. Os jogadores assumem o papel de Joel, um sobrevivente endurecido, que é encarregado de escoltar uma jovem chamada Ellie através dos Estados Unidos, enfrentando perigos, inimigos humanos e criaturas infectadas ao longo do caminho.'},
        {nome: 'Call of Duty: Black Ops 6', descricao: 'Call of Duty: Black Ops 6 é um jogo de tiro em primeira pessoa da popular franquia Call of Duty. Desenvolvido pela Treyarch e publicado pela Activision, o jogo continua a tradição da série de oferecer uma experiência intensa de combate militar. Com uma campanha envolvente, modos multiplayer competitivos e uma variedade de armas e equipamentos, Black Ops 6 proporciona aos jogadores a oportunidade de se envolver em batalhas emocionantes em diferentes cenários ao redor do mundo.'},
        {nome: 'Grand Theft Auto 6', descricao: 'Grand Theft Auto 6 é o próximo título da aclamada série de jogos de mundo aberto desenvolvida pela Rockstar Games. Embora detalhes específicos sobre o enredo e os recursos do jogo ainda não tenham sido divulgados, espera-se que GTA 6 continue a tradição da franquia de oferecer uma experiência imersiva em um ambiente urbano expansivo, permitindo aos jogadores explorar a cidade, participar de missões, interagir com personagens e se envolver em atividades criminosas. Com gráficos aprimorados, jogabilidade envolvente e uma narrativa intrigante, Grand Theft Auto 6 promete ser um dos lançamentos mais aguardados pelos fãs da série.'},
        {nome: 'Mortal Kombat 1', descricao: 'Mortal Kombat 1 é o primeiro jogo da icônica série de jogos de luta Mortal Kombat, desenvolvido pela Midway Games e lançado em 1992. O jogo apresenta uma variedade de personagens jogáveis, cada um com habilidades únicas e movimentos especiais. Os jogadores participam de combates intensos em arenas temáticas, utilizando ataques corpo a corpo, combos e fatalities para derrotar seus oponentes. Mortal Kombat 1 é conhecido por sua jogabilidade inovadora, gráficos impressionantes para a época e a introdução do conceito de fatalities, que se tornou uma marca registrada da franquia.'},
        {nome: 'Bully', descricao: 'Bully é um jogo de ação e aventura desenvolvido pela Rockstar Vancouver e publicado pela Rockstar Games. Lançado em 2006, o jogo se passa em uma escola fictícia chamada Bullworth Academy, onde os jogadores assumem o papel de Jimmy Hopkins, um adolescente problemático que enfrenta desafios sociais e conflitos com colegas e professores. O jogo combina elementos de exploração, missões e interações sociais, permitindo aos jogadores participar de atividades escolares, enfrentar valentões, fazer amigos e explorar o ambiente escolar. Bully é conhecido por seu humor irreverente, narrativa envolvente e jogabilidade única que oferece uma experiência divertida e cativante.'}
    ];
    res.render('sobre', { sobre });
})

app.get('/categoria', (req, res) => {
    const categorias = [
        {nome: 'The Last of Us', tipoCategoria: 'Ação e Aventura'},
        {nome: 'Call of Duty: Black Ops 6', tipoCategoria: 'Tiro em Primeira Pessoa'},
        {nome: 'Grand Theft Auto 6', tipoCategoria: 'Ação e Aventura'},
        {nome: 'Mortal Kombat 1', tipoCategoria: 'Luta'},
        {nome: 'Bully', tipoCategoria: 'Ação e Aventura'}
    ]
        
    res.render('categorias', { categorias });
});


const port = 3000;
app.listen(port, (error) => {
    if (error){
        console.log('Erro ao iniciar o servidor: ', error);
    } else {
        console.log(`Servidor rodando na porta ${port}`);
    }
});