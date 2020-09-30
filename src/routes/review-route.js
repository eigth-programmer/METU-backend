const express = require('express');
const auth = require('../middelware/security/auth');
const ReviewController = require('../entities/review/infraestructure/review-controller');

const router = express.Router();

// @TODO sanitize parameters
router.post('/', auth.isLogged, ReviewController.create);
router.put('/:id', auth.isLogged, auth.isAdmin, ReviewController.update);
router.get('/', ReviewController.getList);
router.delete('/:id', auth.isLogged, auth.isAdmin, ReviewController.remove);

module.exports = router;
