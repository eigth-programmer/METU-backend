const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const checkAuth = require('../middelware/security/check-auth');
const roleAuth = require('../middelware/security/role-auth');
const { body, validationResult } = require('express-validator');
const { UserController } = require('../entities/user/infraestructure/user-controller')
const router = express.Router();
const controller = new UserController();

const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await controller.getByEmail(email);
        if(!user) {return res.status(401).json({msg: 'Login failed'})}
        const matched = await bcrypt.compare(password, user.password);
        if(!matched) {return res.status(401).json({msg: 'Login failed'})}
        const token = jwt.sign(req.body.email, process.env.JWT_KEY);

        return res.status(200).json({msg:'Success', token: token});
    } catch (err) {
        return res.status(500).json({msg:'Could login user', error: err});
    }
}

const register = async (req, res) => {
    const {username, email, password} = req.body;
    try {
        const user = await controller.getByEmail(email);
        if(user) { return res.status(409).json({msg: 'This email is already used'})}
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const newUser = await controller.create({username: username, email: email, password: hash});
        const token = jwt.sign(email, process.env.JWT_KEY);

        return res.status(200).json({msg:'Success', token: token});
    } catch (err) {
        return res.status(500).json({msg:'Could not register user', error: err});
    }
}

router.post('/login', [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({min: 5, max: 8}).not().isEmpty()],
    login);

router.post('/register', [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({min: 5, max: 8}).not().isEmpty()],
    register);

router.delete('/:id',  (req, res, next) => {
    controller
        .delete(req.params.id)
        .then(() => {
            return res.status(200).json({msg:'Success'})
        }).catch(err => {
            return res.status(500).json({msg:'Could not delete user', error: err})
        });
})

router.get('/:email',  (req,res) => {
    controller
        .getByEmail(req.params.email)
        .then(user => {
            return res.status(200).json({user: user})
        })
        .catch(err => {
            return res.status(500).json({msg:'Could not retrieve user', error: err})
        })
})

module.exports = router;
