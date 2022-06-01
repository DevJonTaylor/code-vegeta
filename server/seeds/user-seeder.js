var User = require('../models/User');

var mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/code-vegeta',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
);
  
var users = [
    new User({
        username: 'johndoe',
        email: 'johndoe@gmail.com',
        password: '12345ab',
        pages: [],
        friends: [],
    }),
    new User({
        username: 'janedoe',
        email: 'janedoe@gmail.com',
        password: '12345ab',
        pages: [],
        friends: [],
    })
];

var done = 0;

for (var i = 0; i < users.length; i++) {
    users[i].save( function(err, result) {
        done++;
        if (done === users.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}