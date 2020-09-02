const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const { body, validationResult } = require('express-validator');
const router = express.Router();


router.post('/login', [
    body('email')
        .isEmail()
        .normalizeEmail(),
    body('password')
        .isLength({min: 5, max: 8})
        .not()
        .isEmpty()
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors});
    }

});

router.post('/register', [
    body('email')
        .isEmail()
        .normalizeEmail(),
    body('password')
        .isLength({min: 5, max: 8})
        .not()
        .isEmpty()
], (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors});
    }
});

router.delete('/:id', checkAuth, roleAuth, (req, res, next) => {

})

router.get('/:email', checkAuth, roleAuth, (req,res) => {

})
module.exports = router;