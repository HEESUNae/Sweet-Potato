require('dotenv').config();
const { MONGO_URI } = process.env;

const express = require('express');
const path = require('path');
const app = express();
const port = 8888;

// cors
app.use(express.json());
var cors = require('cors');
app.use(cors());

// json parsing
app.use(express.json());

// db connection
const { default: mongoose } = require('mongoose');
mongoose
  .connect(MONGO_URI, {
    dbName: 'Sweet-Potato',
  })
  .then(() => {
    console.log('mongodb connected');
  })
  .catch((err) => console.log(err));

// router
const userRouter = require('./api/routes/user.router');
const listRouter = require('./api/routes/list.router');
const commentRouter = require('./api/routes/comment.router');
//
app.use('/api/user', userRouter);
app.use('/api/list', listRouter);
app.use('/api/comment', commentRouter);

app.listen(port, (req, res) => {
  console.log('server start' + port);
});

app.use(express.static(path.join(__dirname, '/build')));

app.get('*', function (res, req) {
  req.sendFile(path.join(__dirname, '/build/index.html'));
});

module.exports = app;
