const MongoReview = require('../../../db/mongoose/schemas/review-schema');
const {Review} = require('../domain/review');
const {ReviewRepository} = require('../domain/review-repository')

class ReviewMongoRepository extends ReviewRepository{
    async create(review) {
        const newReview = new MongoReview(review);
        await newReview.save();
        return new Review(newReview);
    }

    async update(review) {
        const updateReview = new MongoReview(review);
        await updateReview.findByIdAndUpdate(review.id, review);
    }

    async delete(id) {
        return MongoReview.findOneAndDelete(id);
    }

    async getList(params = {}) {
        const reviews = await MongoReview.find(params);
        return reviews.map( review => {
            new Review(review);
        });
    }
}

module.exports = {ReviewMongoRepository: ReviewMongoRepository};