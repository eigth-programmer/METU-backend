const express = require('express');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const {CategoryController} = require('../entities/category/infraestructure/category-controller');

const router = express.Router();
const controller = new CategoryController();


router.post('/', (req, res) => {
    controller.create({
        name: req.body.name
    })
        .then(category => {
            return res.status(200).json({category: category});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not register category'})
        });
});

// @TODO sanitize parameters
router.get('/', (req, res) => {
    controller.getList()
        .then(categories => {
            if(categories.length === 0) return res.status(200).json({msg: 'No results where found'})
            return res.status(200).json({categories: categories, length: categories.length});
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
            return res.status(500).json({msg:'Could not delete category'})
        });
});

module.exports = router;