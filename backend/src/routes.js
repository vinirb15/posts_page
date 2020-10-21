const express = require('express');
const routes = express.Router();

const MessageController = require('./controllers/MessageController');

routes.get('/posts', MessageController.index);
routes.get('/posts/:id', MessageController.single);
routes.post('/posts', MessageController.create);
routes.get('/posts/:id/comments', MessageController.comments);
routes.post('/posts/:id/comments', MessageController.createMenssage);


module.exports = routes;