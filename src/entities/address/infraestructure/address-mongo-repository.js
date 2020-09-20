const MongoAddress = require('../../../db/mongoose/schemas/address-schema');
const {Address} = require('../domain/address');
const {AddressRepository} = require('../domain/address-repository')

class AddressMongoRepository extends AddressRepository{
    async create(address) {
        const newAddress = new MongoAddress(address);
        const {id,
            street,
            portal,
            floor,
            door,
            city,
            postCode,
            country,
            client,
            type} = await newAddress.save();

        return new Address(id,
            street,
            portal,
            floor,
            door,
            city,
            postCode,
            country,
            client,
            type);
    }

    async update(address) {
        const updateAddress = new MongoAddress(address);

        const {id,
            street,
            portal,
            floor,
            door,
            city,
            postCode,
            country,
            client,
            type} = await updateAddress.findByIdAndUpdate(address.id, address);

        return new Address(id,
            street,
            portal,
            floor,
            door,
            city,
            postCode,
            country,
            client,
            type);
    }

    async delete(id) {
        return MongoAddress.findOneAndDelete(id);
    }

    async getList(params = {}) {
        const addresses = await MongoAddress.find();
        let list = [];
        addresses.forEach(address => {
            const {id,
                street,
                portal,
                floor,
                door,
                city,
                postCode,
                country,
                client,
                type} = address;

            list.push(new Address(id,
                street,
                portal,
                floor,
                door,
                city,
                postCode,
                country,
                client,
                type));
        });

        return list;
    }
}

module.exports = {AddressMongoRepository: AddressMongoRepository};