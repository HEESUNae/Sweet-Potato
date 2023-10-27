const express = require('express');
const userController = require('../controller/user.controller');
const userRouter = express.Router();

userRouter.post('/join', userController.createUser);
userRouter.post('/login', userController.loginUser);
userRouter.post('/checkId', userController.checkUserId);

module.exports = userRouter;
