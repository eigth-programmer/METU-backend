const createReview = require('../application/create-review');
const updateReview = require('../application/update-review');
const deleteReview = require('../application/delete-review');
const listReviews = require('../application/list-review');
const {ReviewMongoRepository} = require('./review-mongo-repository');
const repository = new ReviewMongoRepository();

const create = async(req, res) => {

}

const update = async(req, res) => {

}

const getList = async(req, res) => {

}

const remove = async(req, res) => {

}

class ReviewController {
    async create(review){
        return await createReview(review, repository);
    }

    async update(review){
        return await updateReview(review, repository);
    }

    async delete(id) {
        return await deleteReview(id, repository);
    }

    async getList(params){
        return await listReviews(params, repository);
    }
}

module.exports = {create: create, update: update, remove: remove, getList: getList}
