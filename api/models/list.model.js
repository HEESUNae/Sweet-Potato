const { default: mongoose } = require('mongoose');

const listSchema = new mongoose.Schema(
  {
    desc: String,
    date: Date,
    image: String,
    userId: { type: String, default: null },
    author: String,
  },
  {
    collection: 'list',
  }
);

const list = new mongoose.model('list', listSchema);

module.exports = list;
