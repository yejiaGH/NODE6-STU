const add = require('./add');
const add2 = require('./add');
// require 2次，仅初始化1次
console.log(add.add(1,3));
console.log(add === add2);

const ot = require('./other');
console.log(ot.name);