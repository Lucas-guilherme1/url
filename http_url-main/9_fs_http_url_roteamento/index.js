const http = require('http')
const fs = require('fs')
const url = require('url')

const PORT = 1000

const server = http.createServer((req, res) =>{
    const q = url.parse(req.url, true)
    const filaName = q.pathname.substring(1)

    if(filaName.includes('html')){
        if(fs.existsSync(filaName)){
            fs.readFile(filaName, function(err, data){
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write(data)
                return res.end()
            })
        }
    } else {
        fs.readFile('404.html', (err, data)=>{
            res.writeHead(404, {'Content-Type':'text.html'})
            res.write(data)
            return res.end()
        })
    }
})

server.listen(PORT, ()=>{
    console.log('servidor on'+PORT+'aq')
})