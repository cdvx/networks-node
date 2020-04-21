//Implementing routing

const fs = require('fs');

// serve: http.Server
const server = require('http').createServer();

const data = {};

server.on('request', (req, res)=> {
    console.log(req.url)
    switch (req.url){
        case '/api':
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(data));
            break;
        case '/home':
        case '/about':
            res.writeHead(200, { 'Conent-Type': 'text/html'});
            res.end(fs.readFileSync(`.${req.url}.html`));
            break;
        case '/':
            res.writeHead(301, {
                'Location': '/home'
            }) // move '/' routing to '/home' 301
            res.end()
            break;
        default:
            res.writeHead(404);
            res.end()
    }
    // res.writeHead(200, {'content-type': 'text/plain'})
    // res.end('Hello world\n'); 
})

server.listen(8000)  

// curl -i localhost:8000/