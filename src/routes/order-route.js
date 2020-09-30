const express = require('express');
const auth = require('../middelware/security/auth');
const OrderController = require('../entities/order/infraestructure/order-controller');

const router = express.Router();

// @TODO sanitize parameters
router.post('/', auth.isLogged, OrderController.create);
router.put('/:id', auth.isLogged, auth.isAdmin, OrderController.update);
router.get('/:id', auth.isLogged, auth.isAdmin, OrderController.get);
router.get('/', auth.isLogged, auth.isAdmin, OrderController.getList);
router.delete('/:id', auth.isLogged, auth.isAdmin, auth.isAdmin, auth.isAdmin, OrderController.remove);

module.exports = router;
