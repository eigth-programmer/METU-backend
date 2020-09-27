const express = require('express');
const auth = require('../middelware/security/auth');
const OrderStateController = require('../entities/orderState/infraestructure/orderState-controller');

const router = express.Router();

// @TODO sanitize parameters
router.get('/', OrderStateController.getList);

module.exports = router;
