const express = require('express');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const { UnitController } = require('../entities/unit/infraestructure/unit-controller');

const router = express.Router();
const controller = new UnitController();


router.post('/', checkAuth, roleAuth, (req, res) => {
    controller.create({
        name: req.body.name
    })
        .then(unit =>{
            return res.status(200).json({unit: unit});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not register unit'})
        });
});

// @TODO sanitize parameters
router.get('/', (req, res) => {
    const params = {}
    controller.getList(params)
        .then(units => {
            if(units.length === 0) return res.status(200).json({msg: 'No results where found'})
            return res.status(200).json({units: units});
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
            return res.status(500).json({msg:'Could not delete unit'});
        });
});
module.exports = router;