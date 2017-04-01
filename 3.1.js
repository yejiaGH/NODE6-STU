const EventEmitter = require('events').EventEmitter;

class User extends EventEmitter {
  constructor() {
    super();
    this.name = '';
  }

  changeName(name) {
    if (name.length < 2) {
      this.emit('error', new Error('name.length must > 2'));
    } else {
      var that = this;
      setTimeout(function(){
        that.name = name;
        that.emit('change name success', name);
      }, 2000);      
    }
  }
}

const user = new User;
user.on('error', function(err) {
  console.log(err);
});
user.addListener('change name success', function(newName){
  console.log('new name: ', newName);
});
user.changeName('nss');