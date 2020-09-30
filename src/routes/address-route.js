const express = require('express');
const auth = require('../middelware/security/auth');
const AddressController = require('../entities/address/infraestructure/address-controller');

const router = express.Router();

// @TODO sanitize parameters
// Misc routes
router.post('/', auth.isLogged, AddressController.create);

// Privileged routes
router.put('/:id', auth.isLogged, auth.isAdmin, AddressController.update);
router.get('/', auth.isLogged, auth.isAdmin, AddressController.getList);
router.delete('/:id', auth.isLogged, auth.isAdmin, AddressController.remove);

// Client routes
router.put('/me/:id', auth.isLogged, auth.isAdmin);
router.get('/me/', auth.isLogged, auth.isAdmin);
router.delete('/me/:id', auth.isLogged, auth.isAdmin);

module.exports = router;
