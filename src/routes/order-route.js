const express = require('express');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const { OrderController } = require('../entities/order/infraestructure/order-controller');

const router = express.Router();
const controller = new OrderController();

// @TODO sanitize parameters
router.post('/', checkAuth, (req, res) => {
    controller.create({
        // @TODO add parameters correctly
        name: req.body.name,
    })
        .then(order =>{
            return res.status(200).json({order: order});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not register order'})
        });
});

// @TODO sanitize parameters
router.put('/:id', checkAuth, (req, res)=>{

});

// @TODO sanitize parameters
router.get('/', checkAuth,( req, res) => {
    const params = {};
    controller.getList(params)
        .then(orders => {
            if(orders.length === 0) return res.status(200).json({msg: 'No results where found'})
            return res.status(200).json({orders: orders});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not retrieve list'})
        });
});

router.delete('/:id', checkAuth, (req, res)=>{
    controller
        .delete()
        .then(() => {
            return res.status(200).json({msg:'Success'});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not delete order'});
        });
});

module.exports = router;