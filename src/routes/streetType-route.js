const express = require('express');
const checkAuth = require('../middelware/security/check-auth');
const roleAuth = require('../middelware/security/role-auth');
const { StreetTypeController } = require('../entities/streetType/infraestructure/streetType-controller');

const router = express.Router();
const controller = new StreetTypeController();

// @TODO sanitize parameters
router.post('/', (req, res) => {
    controller.create({
        name: req.body.name,
    })
        .then(streetType =>{
            return res.status(200).json({streetType: streetType});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not register street type'})
        });
});

// @TODO sanitize parameters
router.get('/', (req, res) => {
    const params = {};
    controller.getList(params)
        .then(streetTypes => {
            if(streetTypes.length === 0) return res.status(200).json({msg: 'No results where found'})
            return res.status(200).json({streetTypes: streetTypes, length: streetTypes.length});
        })
        .catch(err => {
            return res.status(500).json({msg:'Could not retrieve list', err: err})
        });
});

router.delete('/:id',  (req, res)=>{
    controller
        .delete(req.params.id)
        .then(() => {
            return res.status(200).json({msg:'Success'});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not delete street type'});
        });
});

module.exports = router;
