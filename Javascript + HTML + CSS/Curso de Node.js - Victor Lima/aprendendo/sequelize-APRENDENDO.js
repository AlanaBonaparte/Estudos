const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemaDeCadastro', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Conectado com Sucesso!');
}).catch((erro) => {
    console.log('Falha ao se conectar: ' + erro);
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }

});

// Postagem.create({
//     titulo: 'Qualquer',
//     conteudo: 'bla'
// });

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

// Usuario.create({
//     nome: "Alana",
//     sobrenome: "Bonaparte",
//     idade: 30,
//     email: "Alana@test.com"
// });


// Postagem.sync({ force: true });

// Usuario.sync({ force: true });