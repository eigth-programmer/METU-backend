const MongoReview = require('../../../db/mongoose/schemas/review-schema');
const {Review} = require('../domain/review');
const {ReviewRepository} = require('../domain/review-repository')

class ReviewMongoRepository extends ReviewRepository{
    async create(review) {
        const newReview = new MongoReview(review);
        const {id,
            user,
            product,
            created,
            rating,
            title,
            comment} = await newReview.save();
        return new Review(id, user, product, created, rating, title, comment);
    }

    async update(review) {
        const {id,
            user,
            product,
            created,
            rating,
            title,
            comment} = await MongoReview.findByIdAndUpdate(review.id, {
            product: review.product,
            rating: review.rating,
            title: review.title,
            comment: review.comment});
        return new Review(id, user, product, created, rating, title, comment);
    }

    async delete(id) {
        return MongoReview.findOneAndDelete(id);
    }

    async getList(params = {}) {
        const reviews = await MongoReview.find(params);
        let list = [];
        reviews.forEach(review =>{
            const {id,
                user,
                product,
                created,
                rating,
                title,
                comment} = review;

            list.push(new Review(id,
                user,
                product,
                created,
                rating,
                title,
                comment));
        })
        return list;
    }
}

module.exports = {ReviewMongoRepository: ReviewMongoRepository};