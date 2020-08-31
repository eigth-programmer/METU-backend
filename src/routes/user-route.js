import {UserController} from "../entities/user/infraestructure/user-controller";

const express = require('express');
const router = express.Router();
const userController = new UserController();
// Login Page
router.get('/login', (req, res) => {

});

// Welcome Page
router.get('/register', (req, res) => {

});

module.exports = router;