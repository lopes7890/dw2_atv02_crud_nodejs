import connection from '../config/sequelize-config.js';

import Sequelize from 'sequelize';

const Jogo = connection.define('jogos', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Jogo.sync({force: false})

export default Jogo;