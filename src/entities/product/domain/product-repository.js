class ProductRepository {
    create(product){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    update(product){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    delete(product){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    get(product){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    getList(params = {}) {
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    getByName(name){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }
}

module.exports = {ProductRepository: ProductRepository}