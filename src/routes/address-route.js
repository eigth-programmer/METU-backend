const express = require('express');
const auth = require('../middelware/security/auth');
const AddressController = require('../entities/address/infraestructure/address-controller');

const router = express.Router();

// @TODO sanitize parameters
router.post('/', auth.isLogged, auth.isAdmin, AddressController.create);
router.put('/:id', AddressController.update);
router.get('/', AddressController.getList);
router.delete('/:id', AddressController.remove);

module.exports = router;
