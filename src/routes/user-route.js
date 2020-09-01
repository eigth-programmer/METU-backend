import {UserController} from "../entities/user/infraestructure/user-controller";

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const router = express.Router();
const userController = new UserController();

router.post('/login', (req, res) => {
    userController.getUserByEmail(req.body.email)
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
    userController.getUserByEmail(req.body.email)
        .then(user => {
            if(user) { return res.status(409).json({msg: 'This email is already registered'});}
            else {
                bcrypt.hash(req.body.password, 10 ,(err, hash) => {
                if(err) { return res.status(500).json({msg: err})}
                else {
                    userController.createUser({
                        nickName: req.body.nickName,
                        email: req.body.email,
                        password: hash,
                    }).then(result => {
                        res.status(201).json({msg: 'success', user: result})
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
    userController.delete(req.params.id)
        .then(result => {
            res.status(200).json({msg: 'user deleted'})
        })
        .catch(err => {
            return res.status(500).json({msg: err})
        });
})
module.exports = router;