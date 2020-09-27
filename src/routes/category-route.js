const express = require('express');
const checkAuth = require('../middelware/security/auth');
const CategoryController = require('../entities/category/infraestructure/category-controller');

const router = express.Router();

// @TODO sanitize parameters
router.post('/', CategoryController.create);
router.get('/', CategoryController.getList);
router.delete('/:id', CategoryController.remove);

module.exports = router;
