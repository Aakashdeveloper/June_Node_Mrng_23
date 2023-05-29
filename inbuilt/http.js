let http = require('http');

//req > what we send to the server body, params, queryparams
//res > what server respond

let server = http.createServer((req,res)=>{
    res.write('<h1>This is http NodeJs server code</h1>')
    res.end()
})

server.listen(7310)