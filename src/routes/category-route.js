const express = require('express');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const {CategoryController} = require('../entities/category/infraestructure/category-controller');

const router = express.Router();
const controller = new CategoryController();

router.post('/', (req, res) => {
    controller.create()
        .then(category => {

        })
        .catch(() => {
            return res.status(500).json({msg:'Could not register category'})
        });
});

router.get('/', (req, res) => {
    controller.getList()
        .then(categories => {

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
            return res.status(500).json({msg:'Could not delete category'})
        });
});

module.exports = router;