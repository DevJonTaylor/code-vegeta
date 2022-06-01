var User = require('../models/User');

var mongoose = require('mongoose');



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

for (var i = 0; i < users.length; i++) {
    users[i].save(function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('User saved successfully');
        }
    });
}