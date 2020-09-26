const express = require('express');
const checkAuth = require('../middelware/security/check-auth');
const roleAuth = require('../middelware/security/role-auth');
const { OrderStateController } = require('../entities/orderState/infraestructure/orderState-controller');

const router = express.Router();
const controller = new OrderStateController();

// @TODO sanitize parameters
router.get('/', (req, res) => {
    const params = {};
    controller.getList(params)
        .then(states => {
            if(states.length === 0) return res.status(200).json({msg: 'No results where found'})
            return res.status(200).json({states: states, length: states.length});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not retrieve list'})
        });
});

module.exports = router;
