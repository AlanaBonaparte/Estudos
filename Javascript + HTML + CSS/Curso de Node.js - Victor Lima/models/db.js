const Sequelize = require('sequelize');

//-conexão com o banco de dados 
const sequelize = new Sequelize('postagens', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};