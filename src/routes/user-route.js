const express = require('express');
const auth = require('../middelware/security/auth');
const UserController = require('../entities/user/infraestructure/user-controller');
const router = express.Router();

//Misc routes
router.post('/login', auth.login);

//Privileged routes
router.put('/:id', auth.isLogged, auth.isAdmin, UserController.update);
router.delete('/:id', auth.isLogged, auth.isAdmin, UserController.remove);
router.get('/email', auth.isLogged, auth.isAdmin, UserController.getByMail);

//Client routes
router.post('/register', auth.register);
router.put('/me/:id', auth.isLogged, auth.isAdmin, UserController.update);
router.delete('/me/:id', auth.isLogged, auth.isAdmin, UserController.remove);

module.exports = router;
