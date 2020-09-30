const MongoReview = require('../../../db/mongoose/schemas/review-schema');
const {ReviewRepository} = require('./review-repository');
const {mapTo} = require('./review-mapper');

class ReviewMongoRepository extends ReviewRepository{
    async create(review) {
        const newReview = new MongoReview(review);

        return mapTo(await newReview.save());
    }

    async update(review) {
        const update = {
            product: review.product,
            rating: review.rating,
            title: review.title,
            comment: review.comment
        }

        return mapTo(await MongoReview.findByIdAndUpdate(review.id, update, {new: true}));
    }

    async delete(id) {
        return MongoReview.findOneAndDelete(id);
    }

    async getList(params = {}) {
        const reviews = await MongoReview.find(params);

        return reviews.map(review => mapTo(review));
    }
}

module.exports = {ReviewMongoRepository: ReviewMongoRepository};
