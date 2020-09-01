const { UserController } = require("../entities/user/infraestructure/user-controller");
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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

    UserController.getUserByEmail(req.body.email)
        .then(user => {
            if(!user){return res.status(401).json({msg: 'Auth failed'});}
            else {
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if(err){ return res.status(500).json({msg: 'Auth failed'})}
                    if(result){
                        const token = jwt.sign({email: user.email}, key, { expiresIn: '3h'})
                        return res.status(200).json({msg: 'Auth successful', token: token})}
                });
            }
        }).catch(err => {
        return res.status(500).json({msg: err})
    })
});

router.post('/register', (req, res, next) => {
    UserController.getUserByEmail(req.body.email)
        .then(user => {
            if(user) { return res.status(409).json({msg: 'This email is already registered'});}
            else {
                bcrypt.hash(req.body.password, 10 ,(err, hash) => {
                if(err) { return res.status(500).json({msg: err})}
                else {
                    UserController.createUser({
                        nickName: req.body.nickName,
                        email: req.body.email,
                        password: hash,
                    }).then(result => {
                        return res.status(201).json({msg: 'success', user: result})
                    }).catch(err => {
                        return res.status(500).json({msg: err})
                    })
              }
          });
      }
    }).catch(err => {
        return res.status(500).json({msg: err})
    })
});

router.delete('/:id', checkAuth, roleAuth, (req, res, next) => {
    UserController.delete(req.params.id)
        .then(() => {
            return res.status(200).json({msg: 'user deleted'})
        })
        .catch(err => {
            return res.status(500).json({msg: err})
        });
})

router.get('/:email', checkAuth, roleAuth, (req,res) => {
    userController.getUserByEmail(req.params.email)
        .then(user => {
            if(!user) { res.status(404).json({msg: 'user not found'}) }
            else { res.status(200).json({user: user})}
        }).catch(err => {
            return res.status(500).json({err: err});
    })
})
module.exports = router;