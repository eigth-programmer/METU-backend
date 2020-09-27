const express = require('express');
const checkAuth = require('../middelware/security/auth');
const DiscountController = require('../entities/discount/infraestructure/discount-controller');

const router = express.Router();

// @TODO sanitize parameters
router.post('/', DiscountController.create);
router.put('/:id', DiscountController.update);
router.get('/', DiscountController.getList);
router.delete('/:id', DiscountController.remove);

module.exports = router;
