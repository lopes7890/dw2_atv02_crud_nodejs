import express from 'express';
import Jogo from '../models/Jogo.js';

const router = express.Router();

router.post('/jogos/cadastrar', (req, res) => {
    const nome = req.body.nome;
    const preco = req.body.preco;
    const descricao = req.body.descricao;
    const categoria = req.body.categoria;

    Jogo.create({
        nome: nome,
        preco: preco,
        descricao: descricao,
        categoria: categoria
    }).then(() => {
        res.redirect('/jogos');
    }).catch((error) => {
        res.status(500).json({ error: error.message });
    });
});

router.get('/jogos', (req, res) => {
    Jogo.findAll().then((jogos) => {
        res.render('jogos', { jogos: jogos });
    }).catch((error) => {
        console.log(`Erro ao buscar jogos: ${error}`);
    });
});

router.get('/sobre', (req, res) => {
    Jogo.findAll().then((jogos) => {
        res.render('sobre', { jogos: jogos });
    }).catch((error) => {
        console.log(`Erro ao buscar jogos: ${error}`);
    });
});

router.get('/preco', (req, res) => {
    Jogo.findAll().then((jogos) => {
        res.render('preco', { jogos: jogos });
    }).catch((error) => {
        console.log(`Erro ao buscar jogos: ${error}`);
    });
});

router.get('/categorias', (req, res) => {
    Jogo.findAll().then((jogos) => {
        res.render('categorias', { jogos: jogos });
    }).catch((error) => {
        console.log(`Erro ao buscar jogos: ${error}`);
    });
});

router.get('/jogos/excluir/:id', (req, res) => {
    const id = req.params.id;
    Jogo.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect('/jogos');
    }).catch((error) => {
        console.log(`Erro ao excluir jogo: ${error}`);
    });
});

router.get('/jogos/editar/:id', (req, res) => {
    const id = req.params.id;

    Jogo.findByPk(id).then(jogo => {
        res.render('jogosEditar', {
            jogo: jogo
        });
    }).catch((error) => {
        console.log(`Ocorreu um erro ao buscar o cliente. Erro: ${error}`);
    });
});

router.post('/jogos/alterar', (req,res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const preco = req.body.preco;
    const descricao = req.body.descricao;
    const categoria = req.body.categoria;

    Jogo.update(
        {
            nome: nome,
            preco: preco,
            descricao: descricao,
            categoria: categoria
        },
        {
            where: {id: id}
        }
    ).then(() => {
        res.redirect('/jogos');
    }).catch((error) => {
        console.log(`Erro ao alterar o jogo. Erro: ${error}`);
    });

})

export default router;