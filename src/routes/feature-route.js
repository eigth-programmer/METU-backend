const express = require('express');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const {FeatureController} = require('../entities/feature/infraestructure/feature-controller');

const router = express.Router();
const controller = new FeatureController();


router.post('/', checkAuth, roleAuth, (req, res) => {
    controller.create({
        name: req.body.name,
        unit: req.body.unit
    })
        .then(feature => {
            return res.status(200).json({feature: feature});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not register feature'})
        });
});

// @TODO sanitize parameters
router.get('/', (req, res) => {
    controller.getList()
        .then(features => {
            if(features.length === 0) return res.status(200).json({msg: 'No results where found'})
            return res.status(200).json({features: features});
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
            return res.status(500).json({msg:'Could not delete feature'})
        });
});

module.exports = router;