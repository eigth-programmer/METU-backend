const MongoAddress = require('../schemas/address-schema');
const {Address} = require('../../../entities/address/domain/address');
const {AddressRepository} = require('../../../entities/address/infraestructure/address-repository');
const {mapTo} = require('../../../entities/address/infraestructure/address-mapper');

class AddressMongoRepository extends AddressRepository{
    async create(address) {
        const newAddress = new MongoAddress(address);
        return mapTo(await newAddress.save())
    }

    async update(address) {
        const update = {
            street: address.street,
            portal: address.portal,
            floor: address.floor,
            door: address.door,
            city: address.city,
            postCode: address.postCode,
            country: address.country,
            client: address.client,
            type: address.type};

        return mapTo(await MongoAddress.findByIdAndUpdate(address.id, update, {new: true}));
    }

    async delete(id) {
        return MongoAddress.findOneAndDelete(id);
    }

    async getList(params = {}) {
        const addresses = await MongoAddress.find();
        return addresses.map(address => mapTo(address));
    }
}

module.exports = {AddressMongoRepository: AddressMongoRepository};
