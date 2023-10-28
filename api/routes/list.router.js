const express = require('express');
const listController = require('../controller/list.controller');
const listRouter = express.Router();

listRouter.post('/', listController.createList);
listRouter.get('/', listController.getList);
listRouter.put('/', listController.updateList);
listRouter.delete('/', listController.deleteList);

module.exports = listRouter;
