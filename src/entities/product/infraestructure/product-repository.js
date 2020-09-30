class ProductRepository {
    create(product){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    update(product){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    delete(id){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    get(id){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    getList(params = {}) {
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }
}

module.exports = {ProductRepository: ProductRepository}