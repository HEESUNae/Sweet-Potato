const { default: mongoose } = require('mongoose');

const commentSchema = new mongoose.Schema({
  postId: String,
  desc: String,
  userId: String,
  author: String,
  date: Date,
});

const comment = new mongoose.model('comment', commentSchema);

module.exports = comment;
