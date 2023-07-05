const url = require('url'); // utilizar o módulo URL
const utf8 = require('utf8'); // utilizar o módulo UTF-8

const address = 'https://www.meusite.com.br/catalogo?produtos=cadeia';
const parseUrl = new url.URL(address)

console.log(parseUrl.host)
console.log(parseUrl.pathname)
console.log(parseUrl.search)
console.log(parseUrl.searchParams)
console.log(parseUrl.searchParams)