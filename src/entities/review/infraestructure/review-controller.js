const createReview = require('../application/create-review');
const updateReview = require('../application/update-review');
const deleteReview = require('../application/delete-review');
const listReviews = require('../application/list-review');
const {ReviewMongoRepository} = require('./review-mongo-repository');
const repository = new ReviewMongoRepository();

const create = async(req, res) => {
    const {user, product, rating, title, comment} = req.body;

    try {
        const review = await createReview({
            user: user,
            product: product,
            rating: rating,
            title: title,
            comment: comment
        }, repository)
        return res.status(200).json({review: review});
    } catch (err) {
        return res.status(500).json({msg:'Could not update review'});
    }
}

const update = async(req, res) => {
    const {id} = req.params;
    const {user, product, rating, title, comment} = req.body;

    try {
        const review = await updateReview({
            id: id,
            user: user,
            product: product,
            rating: rating,
            title: title,
            comment: comment
        }, repository)
        return res.status(200).json({review: review});
    } catch (err) {
        return res.status(500).json({msg:'Could not update review'});
    }
}

const getList = async(req, res) => {
    const params = {};

    try {
        const reviews = await listReviews(params, repository);
        if(reviews.length === 0) return res.status(200).json({msg: 'No results where found'})
        return res.status(200).json({reviews: reviews, length: reviews.length});
    } catch (err) {
        return res.status(500).json({msg:'Could not retrieve list', error: err});
    }
}

const remove = async(req, res) => {
    const {id} = req.params;

    try {
        await deleteReview(id, repository);
        return res.status(200).json({msg:'Success'});
    } catch (err) {
        return res.status(500).json({msg:'Could not delete review', error: err});
    }
}

module.exports = {create: create, update: update, remove: remove, getList: getList}
