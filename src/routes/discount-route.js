const express = require('express');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const { DiscountController } = require('../entities/discount/infraestructure/discount-controller');

const router = express.Router();
const controller = new DiscountController();

// @TODO sanitize parameters
router.post('/', (req, res) => {
    controller.create({
        name: req.body.name,
        amount: req.body.amount,
        description: req.body.description,
        validity: req.body.validity
    })
        .then(discount =>{
            return res.status(200).json({discount: discount});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not register discount'})
        });
});

// @TODO sanitize parameters
router.put('/:id', (req, res)=>{
    controller.update({
        id: req.params.id,
        name: req.body.name,
        amount: req.body.amount,
        description: req.body.description,
        validity: req.body.validity
    })
        .then(discount =>{
            return res.status(200).json({discount: discount});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not update discount'})
        });
});

// @TODO sanitize parameters
router.get('/', (req, res) => {
    const params = {};
    controller.getList(params)
        .then(discounts => {
            if(discounts.length === 0) return res.status(200).json({msg: 'No results where found'})
            return res.status(200).json({discounts: discounts, length: discounts.length});
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
            return res.status(500).json({msg:'Could not delete discount'});
        });
});

module.exports = router;