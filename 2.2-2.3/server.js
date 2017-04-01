var express = require('express');
var server = express();
var fs = require('fs');

server.get('/', function(req, res){
  res.send(`
    <html>
      <body>
        <form method="post">
          <input name="loginname" />

          <input type="submit" value="提交" />
        </form>
        <script src="script.js"></script>
      </body>
    </html>
  `);
});
server.post('/', function(req, res){
  res.send('server start');
});
server.get('/script.js', function(req, res){
  require('./src');
  // read script.js
  fs.readFile("script.js", function(err, buffer) {
    // Buffer 对二进制数据的封装 byte array [21, 23]
    res.write(buffer);
    res.end();
  });
});
server.listen(3000);