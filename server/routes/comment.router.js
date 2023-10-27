const express = require('express');
const commentController = require('../controller/comment.controller');
const commentRouter = express.Router();

commentRouter.post('/add', commentController.createComment);
commentRouter.post('/', commentController.getComment);
commentRouter.delete('/', commentController.deleteComment);

module.exports = commentRouter;
