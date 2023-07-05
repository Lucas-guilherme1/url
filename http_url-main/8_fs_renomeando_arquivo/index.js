const fs = require('fs')


const arqAntigo = 'arquivo.txt'
const arqNovo = 'novoArquivo.txt'

fs.rename( arqAntigo, arqNovo, function(err){
    if(err){
        console.log(err)
        return
    }
})

console.log(`foi mudado de ${arqAntigo} para ${arqNovo}`)