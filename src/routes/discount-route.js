const express = require('express');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const { DiscountController } = require('../entities/discount/infraestructure/discount-controller');

const router = express.Router();
const controller = new DiscountController();

// @TODO sanitize parameters
router.post('/', checkAuth, roleAuth, (req, res) => {
    controller.create({
        // @TODO add parameters correctly
        name: req.body.name,
    })
        .then(discount =>{
            return res.status(200).json({discount: discount});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not register discount'})
        });
});

// @TODO sanitize parameters
router.put('/:id', checkAuth, (req, res)=>{

});

// @TODO sanitize parameters
router.get('/', (req, res) => {
    const params = {};
    controller.getList(params)
        .then(reviews => {
            if(reviews.length === 0) return res.status(200).json({msg: 'No results where found'})
            return res.status(200).json({reviews: reviews});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not retrieve list'})
        });
});

router.delete('/:id', checkAuth, roleAuth, (req, res)=>{
    controller
        .delete()
        .then(() => {
            return res.status(200).json({msg:'Success'});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not delete discount'});
        });
});

module.exports = router;