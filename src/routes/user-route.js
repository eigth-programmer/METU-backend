const express = require('express');
const auth = require('../middelware/security/auth');
const UserController = require('../entities/user/infraestructure/user-controller');
const router = express.Router();

router.post('/login', auth.login);
router.post('/register', auth.register);
router.put('/:id', auth.isLogged, auth.isAdmin, UserController.update);
router.delete('/:id', auth.isLogged, auth.isAdmin, UserController.remove);
router.get('/email', auth.isLogged, auth.isAdmin, UserController.getByMail);

module.exports = router;
