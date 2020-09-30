class OrderRepository {
    create(order){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    update(order){
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

module.exports = {OrderRepository: OrderRepository}