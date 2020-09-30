const express = require('express');
const auth = require('../middelware/security/auth');
const DiscountController = require('../entities/discount/infraestructure/discount-controller');

const router = express.Router();

// @TODO sanitize parameters
router.post('/', auth.isLogged, auth.isAdmin, DiscountController.create);
router.put('/:id', auth.isLogged, auth.isAdmin, DiscountController.update);
router.get('/', auth.isLogged, auth.isAdmin, DiscountController.getList);
router.delete('/:id', auth.isLogged, auth.isAdmin, DiscountController.remove);

module.exports = router;
