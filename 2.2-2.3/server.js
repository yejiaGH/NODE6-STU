var express = require('express');
var server = express();
server.get('/', function(req, res){
  res.send(`
    <html>
      <body>
        <form method="post">
          <input name="loginname" />

          <input type="submit" value="提交" />
        </form>
      </body>
    </html>
  `);
});
server.post('/', function(req, res){
  res.send('server start');
});
server.listen(3000);