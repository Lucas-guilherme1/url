const http = require('http'); // utilizar o módulo HTTP
const utf8 = require('utf8'); // utilizar o módulo UTF-8
// console.log(http);

// caminho para acessar as informações
const PORT = 3000;

// criar um servidor
/*
    'req' = requisição.
    'res' = resposta.

    'res.write' = escrever algo como resposta.
    'res.end' = encerrar o código para não ocupar espaço.
    'res.writeHead' = cabeçalho.


    -> com resposta:
    const server = http.createServer((req, res) => {
    res.write('Hello, World!')
    res.end()
    });


    --> com requisiçao e resposta:
    const server = http.createServer((req, res) => {
        if(req.url === '/home') {
            res.writeHead(200, {'Content-Type':'text/plan'})
            res.write('Página Home')
            res.end()
        }   
        else if(req.url === '/sobre') {
            res.writeHead(200, {'Content-Type':'text/plan'})
            res.write('Página Sobre')
            res.end()
        }
        else {
            res.writeHead(404, {'Content-Type':'text/plan'})
            res.write('Página não encontrada')
            res.end()
        } 
    });
    
    --> retornando HTML:
    const server = http.createServer((req, res) => {
        if(req.url === '/home') {
            res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'})
            res.write('<h1>Página Home</h1>')
            res.write('<p>Esta é a página home<p>')
            res.end()
        }
        else if(req.url === '/sobre') {
            res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'})
            res.write('<h1>Página Sobre</h1>')
            res.write('<p>Esta é a página sobre</p>')
            res.end()
        }
        else {
            res.writeHead(404, {'Content-Type' : 'text/html; charset=UTF-8'})
            res.write('<h1>Página não encontrada</h1>')
            res.end()
        }
    });
*/

// Acessar o servidor pelo navegador.



// atv 3
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});






