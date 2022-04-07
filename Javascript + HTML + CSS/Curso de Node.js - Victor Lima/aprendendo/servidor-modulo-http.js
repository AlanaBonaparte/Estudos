var http = require('http');

http.createServer(function(req, res) {
    res.end(" bem vindo a pagina do modulo http");
}).listen(8888);

console.log("Servidor rodando")