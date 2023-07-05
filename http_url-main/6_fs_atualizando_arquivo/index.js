const http = require('http')
const PORT = 5000

const fs = require('fs')
const server = http.createServer((req, res)=>{
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name


if(!name){
    fs.readFile('index.html', (err, data)=>{
        res.writeHead(200, {'Contet-Type':'text/html'})
        res.write(data)
        return res.end()
    })
} else {
    const nameNewline = name+'\r\n'
    fs.appendFile('arquivo.txt', nameNewline, function(){
        res.writeHead(302, {
            Location:'/',
        })
        return res.end()
    })
}

})


server.listen(PORT, ()=>{
    console.log(`oi`)
    })
    