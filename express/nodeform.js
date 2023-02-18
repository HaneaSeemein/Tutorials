var http = require('http');

http.createServer(function(req, res) {
    console.log("listening at localhost:8080");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // res.writeHead(210, { 'Content-Type': 'text/plain' });
    res.end("duh ");
}).listen(8080);