const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudos: {
        type: db.Sequelize.TEXT
    }
});

//Post.sync({ force: true });

module.exports = Post;