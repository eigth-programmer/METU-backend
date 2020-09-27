const express = require('express');
const auth = require('../middelware/security/auth');
const UnitController = require('../entities/unit/infraestructure/unit-controller');

const router = express.Router();

// @TODO sanitize parameters
router.post('/', UnitController.create);
router.get('/', UnitController.getList);
router.delete('/:id', UnitController.remove);

module.exports = router;
