const express = require('express');
const auth = require('../middelware/security/auth');
const OrderController = require('../entities/order/infraestructure/order-controller');

const router = express.Router();

// @TODO sanitize parameters
router.post('/', OrderController.create);
router.put('/:id', OrderController.update);
router.get('/:id', OrderController.get);
router.get('/', OrderController.getList);
router.delete('/:id', OrderController.remove);

module.exports = router;
