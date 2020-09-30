const express = require('express');
const auth = require('../middelware/security/auth');
const OrderController = require('../entities/order/infraestructure/order-controller');

const router = express.Router();

// @TODO sanitize parameters

// Misc routes
router.post('/', auth.isLogged, OrderController.create);

// Privileged routes
router.put('/:id', auth.isLogged, auth.isAdmin, OrderController.update);
router.get('/:id', auth.isLogged, auth.isAdmin, OrderController.get);
router.get('/', auth.isLogged, auth.isAdmin, OrderController.getList);
router.delete('/:id', auth.isLogged, auth.isAdmin, OrderController.remove);

// Client routes
router.get('/me/:id', auth.isLogged, auth.isAdmin, OrderController.get);
router.get('/me/', auth.isLogged, auth.isAdmin, OrderController.getList);
router.delete('/me/:id', auth.isLogged, auth.isAdmin, OrderController.remove);

module.exports = router;
