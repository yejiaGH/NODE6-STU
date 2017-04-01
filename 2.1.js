const http = require('http');

http.createServer(function(req, res){
  res.write('<h1>hello server start</h1>');
  res.end();
}).listen(3000);