const express = require('express');
const ControllerRoutes = require('./controllers/ControllerRoutes');

const routes = express.Router();

routes.get('/', ControllerRoutes.getTodo);

routes.post('/:todo', ControllerRoutes.addTodo);

routes.delete('/:todo', ControllerRoutes.delTodo);

module.exports = routes;
