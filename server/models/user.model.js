const { default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userPw: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'user',
  }
);

const User = mongoose.model('user', userSchema);

module.exports = User;
