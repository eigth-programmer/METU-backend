class ReviewRepository {
    create(review){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    update(review){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    delete(id){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    getList(params = {}) {
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }
}

module.exports = {ReviewRepository: ReviewRepository}