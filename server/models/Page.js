const { Schema, model } = require('mongoose');

const pageSchema = new Schema(
  {
    myhtml: {
      type: String,
      required: 'You need to have HTML!',
    },
    mycss: {
      type: String,
      required: 'You need to have CSS!',
    },
    username: {
      type: String,
      required: true
    },
  
  },
  {
    toJSON: {
        virtuals: true
    }
  }
);


const Page = model('Page', pageSchema);

module.exports = Page;
