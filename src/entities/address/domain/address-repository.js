class AddressRepository {
    create(address){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    update(address){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    delete(id){
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }

    getList(params = {}) {
        throw new Error('METHOD_NOT_IMPLEMENTED');
    }
}

module.exports = {AddressRepository: AddressRepository}