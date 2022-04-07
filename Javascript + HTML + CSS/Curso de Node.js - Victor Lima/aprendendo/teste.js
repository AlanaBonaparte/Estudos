const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get('/blog', (req, res) => {
    res.send("Meu blog");
});

app.get('/ola/:cargo/:nome/:cor', (req, res) => {
    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2>Seu cargo e: " + req.params.cargo + "</h2>" + "<h3>Sua cor favorita e: " + req.params.cor + "</h3>");
});

app.listen(9999, () => {
    console.log('servidor rodando');
});