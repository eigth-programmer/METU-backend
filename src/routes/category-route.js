const express = require('express');
const auth = require('../middelware/security/auth');
const CategoryController = require('../entities/category/infraestructure/category-controller');

const router = express.Router();

// @TODO sanitize parameters
router.post('/', auth.isLogged, auth.isAdmin, CategoryController.create);
router.get('/', CategoryController.getList);
router.delete('/:id', auth.isLogged, auth.isAdmin, CategoryController.remove);

module.exports = router;
