const buf = Buffer.alloc(5);
buf[2] = 24;
console.log(buf);
const fs = require('fs');

fs.readFile('3.1.js', function(err, buffer) {
  console.log(buffer);
});