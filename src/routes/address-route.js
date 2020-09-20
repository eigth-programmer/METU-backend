const express = require('express');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const { AddressController } = require('../entities/address/infraestructure/address-controller');

const router = express.Router();
const controller = new AddressController();

// @TODO sanitize parameters
router.post('/', (req, res) => {
    controller.create({
        street: req.body.street,
        portal: req.body.portal,
        floor: req.body.floor,
        door: req.body.door,
        city: req.body.city,
        postCode: req.body.postCode,
        country: req.body.country,
        client: req.body.client,
        type: req.body.type
    })
        .then(address =>{
            return res.status(200).json({address: address});
        })
        .catch(err => {
            return res.status(500).json({msg:'Could not register address', error: err})
        });
});

// @TODO sanitize parameters
router.put('/:id', (req, res)=>{
    controller.update({
        id: req.params.id,
        street: req.body.street,
        portal: req.body.portal,
        floor: req.body.floor,
        door: req.body.door,
        city: req.body.city,
        postCode: req.body.postCode,
        country: req.body.country,
        client: req.body.client,
        type: req.body.type
    })
        .then(address =>{
            return res.status(200).json({address: address});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not update address'})
        });
});

// @TODO sanitize parameters
router.get('/', ( req, res) => {
    const params = {};
    controller.getList(params)
        .then(addresses => {
            if(addresses.length === 0) return res.status(200).json({msg: 'No results where found'})
            return res.status(200).json({addresses: addresses, length: addresses.length});
        })
        .catch(err => {
            return res.status(500).json({msg:'Could not retrieve list', err: err})
        });
});

router.delete('/:id', (req, res)=>{
    controller
        .delete(req.params.id)
        .then(() => {
            return res.status(200).json({msg:'Success'});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not delete address'});
        });
});

module.exports = router;