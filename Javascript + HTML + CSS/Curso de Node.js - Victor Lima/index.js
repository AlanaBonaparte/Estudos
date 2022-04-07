const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');
const res = require('express/lib/response');



//Config
//-template engine
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));
app.set('view engine', 'handlebars'); //queremos usar o handlebars como template and

//antes estava assim
/* 
    app.engine('handlebars', handlebars.engine({
        defaultLayout: 'main'}));
        app.set('view engine', 'handlebars'); 
*/




//-body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//rotas

app.get('/', (req, res) => {
    Post.findAll({
        order: [
            ['id', 'DESC'] //MOSTRA DO MAIS RECENTE PARA O MAIS ANTIGO
        ]
    }).then((post) => {
        res.render('home', { posts: post }); //recebe array de postagens

    })
})

app.get('/cadastro', (req, res) => {
    res.render('formulario');
});

app.post('/add', (req, res) => {

    Post.create({
        titulo: req.body.titulo,
        conteudos: req.body.conteudo
    }).then(() => {
        res.redirect('/');
    }).catch(erro => {
        res.send('houve um error: ' + erro);
    })

    // res.send('Texto: ' + req.body.titulo + ' Conteúdo: ' + req.body.conteudo);
});

app.get('/deletar/:id', (req, res) => {

    Post.destroy({ where: { 'id': req.params.id } })
        .then(() => {
            res.send('Postagen deletada com sucesso!')
        }).catch(erro => { res.send("Esta postagem não existe!") })

})


app.listen(8080, () => console.log('servidor rodando na url http://localhost:8080'));