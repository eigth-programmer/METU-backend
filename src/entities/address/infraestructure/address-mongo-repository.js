const MongoAddress = require('../../../db/mongoose/schemas/address-schema');
const {Address} = require('../domain/address');
const {AddressRepository} = require('../domain/address-repository')

class AddressMongoRepository extends AddressRepository{
    async create(address) {
        const newAddress = new MongoAddress(address);
        await newAddress.save();
        return new Address(newAddress);
    }

    async update(address) {
        const updateAddress = new MongoAddress(address);
        await updateAddress.findByIdAndUpdate(address.id, address);
    }

    async delete(id) {
        return MongoAddress.findOneAndDelete(id);
    }

    async getList(params = {}) {
        const address = await MongoAddress.find(params);
        return address.map( address => {
            new Address(address);
        });
    }
}

module.exports = {AddressMongoRepository: AddressMongoRepository};