var http = require('http');

http.createServer(function(req, res){;
res.writeHead(200, {'Create-type':'text/html'});
res.end("Global Warming!");

}).listen(8080);