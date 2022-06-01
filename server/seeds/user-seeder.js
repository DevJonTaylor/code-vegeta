var User = require('../models/User');

var mongoose = require('mongoose');

const dev = require("../config/connection");

// mongoose.connect(
//     process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/code-vegeta',
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     }
// );
  
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

//connect mongoose
mongoose
  .connect(String(dev.db), { useNewUrlParser: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
  });

//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
users.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === products.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});

// var done = 0;

// for (var i = 0; i < users.length; i++) {
//     users[i].save( function(err, result) {
//         done++;
//         if (done === users.length) {
//             exit();
//         }
//     });
// }

// function exit() {
//     mongoose.disconnect();
// }