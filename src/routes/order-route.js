const express = require('express');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const { OrderController } = require('../entities/order/infraestructure/order-controller');

const router = express.Router();
const controller = new OrderController();

// @TODO sanitize parameters
router.post('/', (req, res) => {
    controller.create({
        user: req.body.user,
        comment: req.body.comment,
        state: req.body.state,
        discounts: req.body.discounts,
        lines: req.body.lines
    })
        .then(order =>{
            return res.status(200).json({order: order});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not register order'})
        });
});

// @TODO sanitize parameters
router.put('/:id', (req, res)=>{
    controller.update({
        id: req.params.id,
        user: req.body.user,
        comment: req.body.comment,
        state: req.body.state,
        discounts: req.body.discounts,
        lines: req.body.lines
    })
        .then(order =>{
            return res.status(200).json({order: order});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not update order'})
        });
});

router.get('/:id', (req, res)=>{
    controller.get(req.params.id)
        .then(order =>{
            return res.status(200).json({order: order});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not retrieve order'})
        });
});

// @TODO sanitize parameters
router.get('/',( req, res) => {
    const params = {};
    controller.getList(params)
        .then(orders => {
            if(orders.length === 0) return res.status(200).json({msg: 'No results where found'})
            return res.status(200).json({orders: orders, length: orders.length});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not retrieve list'})
        });
});

router.delete('/:id', (req, res)=>{
    controller
        .delete(req.params.id)
        .then(() => {
            return res.status(200).json({msg:'Success'});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not delete order'});
        });
});

module.exports = router;