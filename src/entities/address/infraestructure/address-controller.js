const createAddress = require('../application/create-address');
const updateAddress = require('../application/update-address');
const deleteAddress = require('../application/delete-address');
const listAddresses = require('../application/list-address');
const {AddressMongoRepository} = require('./address-mongo-repository');
const repository = new AddressMongoRepository();

class AddressController {
    async create(address){
        return await createAddress(address, repository);
    }

    async update(address){
        return await updateAddress(address, repository);
    }

    async delete(id) {
        return await deleteAddress(id, repository);
    }

    async getList(params){
        return await listAddresses(params, repository);
    }
}

module.exports = { AddressController: AddressController}