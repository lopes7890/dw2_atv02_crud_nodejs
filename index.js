import express from 'express';
import connection from './config/sequelize-config.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.use(express.static('public'));

connection.authenticate().then(() => {
    console.log('conexão com o banco de dados realizada com sucesso!');
}).catch((error) => {
    console.log(`Ocorreu um erro ao conectar com o banco. Erro: ${error}`);
});

const DB_NAME = 'jogos';

connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`).then(() => {
    console.log(`Banco de dados ${DB_NAME} criado com sucesso!`);
}).catch((error) => {
    console.log(`Falha ao criar o banco de dados ${DB_NAME}. Erro: ${error}`);
});

import Jogo from './models/Jogo.js';

import Jogoscontrollers from './controllers/jogoscontrollers.js';

app.use("/", Jogoscontrollers);

app.get('/', (req, res) => {
    res.render('index');
});

const port = 3000;
app.listen(port, (error) => {
    if (error){
        console.log('Erro ao iniciar o servidor: ', error);
    } else {
        console.log(`Servidor rodando na porta ${port}`);
    }
});