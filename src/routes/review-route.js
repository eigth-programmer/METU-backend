const express = require('express');
const checkAuth = require('../helpers/security/check-auth');
const roleAuth = require('../helpers/security/role-auth');
const { ReviewController } = require('../entities/review/infraestructure/review-controller');

const router = express.Router();
const controller = new ReviewController();

// @TODO sanitize parameters
router.post('/',  (req, res) => {
    controller.create({
        user: req.body.user,
        product: req.body.product,
        rating: req.body.rating,
        title: req.body.title,
        comment: req.body.comment
    })
        .then(review =>{
            return res.status(200).json({review: review});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not register review'})
        });
});

// @TODO sanitize parameters
router.put('/:id',  (req, res)=>{
    controller.update({
        id: req.params.id,
        user: req.body.user,
        product: req.body.product,
        rating: req.body.rating,
        title: req.body.title,
        comment: req.body.comment
    })
        .then(review =>{
            return res.status(200).json({review: review});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not update review'})
        });
});

// @TODO sanitize parameters
router.get('/', (req, res) => {
    const params = {};
    controller.getList(params)
        .then(reviews => {
            if(reviews.length === 0) return res.status(200).json({msg: 'No results where found'})
            return res.status(200).json({reviews: reviews, length: reviews.length});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not retrieve list'})
        });
});

router.delete('/:id',  (req, res)=>{
    controller
        .delete(req.params.id)
        .then(() => {
            return res.status(200).json({msg:'Success'});
        })
        .catch(() => {
            return res.status(500).json({msg:'Could not delete review'});
        });
});

module.exports = router;