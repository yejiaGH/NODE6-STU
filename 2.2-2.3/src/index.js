const add = require('./add');
if (typeof window === 'undefined') {
  //node.js env
  console.log(add(1,2));
} else {
  // browser env
  alert(add(1,2));
}