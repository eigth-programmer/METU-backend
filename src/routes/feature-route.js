const express = require('express');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const {FeatureController} = require('../entities/feature/infraestructure/feature-controller');

const router = express.Router();
const controller = new FeatureController();

router.post('/', (req, res) => {
    controller.create()
        .then(feature => {

        })
        .catch(() => {
            return res.status(500).json({msg:'Could not register feature'})
        });
});

router.get('/', (req, res) => {
    controller.getList()
        .then(features => {

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