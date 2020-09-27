const express = require('express');
const auth = require('../middelware/security/auth');
const ReviewController = require('../entities/review/infraestructure/review-controller');

const router = express.Router();

// @TODO sanitize parameters
router.post('/', ReviewController.create);
router.put('/:id', ReviewController.update);
router.get('/', ReviewController.getList);
router.delete('/:id', ReviewController.remove);

module.exports = router;
