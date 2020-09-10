const express = require('express');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const { UnitController } = require('../entities/unit/infraestructure/unit-controller');

const router = express.Router();
const controller = new UnitController();

router.post('/', (req, res) => {
    controller.create()
        .then(unit =>{

        })
        .catch(() => {
            return res.status(500).json({msg:'Could not register unit'})
        });
});

router.get('/', (req, res) => {
    controller.getList()
        .then(units => {

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