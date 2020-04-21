
// serve: http.Server
const server = require('http').createServer();

server.on('request', (req, res)=> {
    res.writeHead(200, {'content-type': 'text/plain'})

    setTimeout(()=>{
        res.write('Another Helloer world \n')
    }, 10000)
    setTimeout(()=>{
        res.write('yet Another Helloer world \n')
    }, 20000)
    // res.end('Hello world\n');
})


server.timeout = 1000;
server.listen(8000)  