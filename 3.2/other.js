let obj = {

};

module.exports = obj;


obj.name = 'meimei';
obj.add = '';

exports.name = 'meimei2';
exports.add = function ( ) {

};

console.log(obj.name);
console.log(module.exports.name);
console.log(exports.name);