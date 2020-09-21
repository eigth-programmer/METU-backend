const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const { body, validationResult } = require('express-validator');
const { UserController } = require('../entities/user/infraestructure/user-controller')
const router = express.Router();
const controller = new UserController();

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

    controller.getByEmail(req.body.email)
        .then(user =>{
            if(!user) {return res.status(401).json({msg: 'Login failed'})}

            bcrypt.compare(req.body.password, user.password, (err, result)=>{
               if(err) { return res.status(401).json({msg: 'Login failed'})}
               if(result) {
                   const token = jwt.sign(
                       {data: req.body.email},
                       process.env.JWT_KEY,
                       {expiresIn: 3600});
                   return res.status(200).json({msg: 'success', token: token})
               }
            });
        })
        .catch(err => {
            return res.status(500).json({msg:'Login failed'})
        })
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

    controller.getByEmail(req.body.email)
        .then(user => {
            if(user) { return res.status(409).json({msg: 'This email is already used'})}

            bcrypt.hash(req.body.password, 10, (err, hash)=>{
                if(err) {return res.status(500).json({msg: 'Hashing failed'})}

                controller.create({
                    email: req.body.email,
                    password: hash,
                    role: req.body.role
                }).then(()=> {
                    const token = jwt.sign(req.body.email, process.env.JWT_KEY, {expiresIn: "1h"});
                    return res.status(200).json({msg: 'success', token: token})
                }).catch(err => {
                    return res.status(500).json({msg: err});
                })
            });
        })
        .catch(err => {
            return res.status(500).json({msg:'Registering failed'})
        })
});

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