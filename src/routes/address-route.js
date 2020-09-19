const express = require('express');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const { AddressController } = require('../entities/address/infraestructure/address-controller');

const router = express.Router();
const controller = new AddressController();

// @TODO sanitize parameters
router.post('/', checkAuth, (req, res) => {
    controller.create({
        // @TODO add parameters correctly
        name: req.body.name,
    })
        .then(address =>{
            return res.status(200).json({address: address});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not register address'})
        });
});

// @TODO sanitize parameters
router.put('/:id', checkAuth, (req, res)=>{

});

// @TODO sanitize parameters
router.get('/', checkAuth, roleAuth,( req, res) => {
    const params = {};
    controller.getList(params)
        .then(addresses => {
            if(addresses.length === 0) return res.status(200).json({msg: 'No results where found'})
            return res.status(200).json({addresses: addresses});
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
            return res.status(500).json({msg:'Could not delete address'});
        });
});

module.exports = router;