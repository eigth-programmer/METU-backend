const express = require('express');
const auth = require('../middelware/security/auth');
const AddressController = require('../entities/address/infraestructure/address-controller');

const router = express.Router();

// @TODO sanitize parameters
router.post('/', auth.isLogged, AddressController.create);
router.put('/:id', auth.isLogged, auth.isAdmin, AddressController.update);
router.get('/', auth.isLogged, auth.isAdmin, AddressController.getList);
router.delete('/:id', auth.isLogged, auth.isAdmin, AddressController.remove);

module.exports = router;
