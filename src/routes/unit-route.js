const express = require('express');
const auth = require('../middelware/security/auth');
const UnitController = require('../entities/unit/infraestructure/unit-controller');

const router = express.Router();

// @TODO sanitize parameters
router.post('/', auth.isLogged, auth.isAdmin, UnitController.create);
router.get('/', UnitController.getList);
router.delete('/:id', auth.isLogged, auth.isAdmin, UnitController.remove);

module.exports = router;
