const createAddress = require('../application/create-address');
const updateAddress = require('../application/update-address');
const deleteAddress = require('../application/delete-address');
const listAddresses = require('../application/list-address');
const {AddressMongoRepository} = require('../../../database/mongoose/repositories/address-mongo-repository');
const repository = new AddressMongoRepository();

const create = async(req, res) => {
    const {street, portal, floor, door, city, postCode, country, client, type} = req.body;

    try{
        const address = await createAddress({
                street: street,
                portal: portal,
                floor: floor,
                door: door,
                city: city,
                postCode: postCode,
                country: country,
                client: client,
                type: type},
            repository);
        return res.status(200).json({address: address});
    } catch (err) {
        return res.status(500).json({msg:'Could not create address', error: err});
    }
}

const update = async(req, res) => {
    const {id} = req.params;
    const {street, portal, floor, door, city, postCode, country, client, type} = req.body;

    try {
        const address = await updateAddress({
                id: id,
                street: street,
                portal: portal,
                floor: floor,
                door: door,
                city: city,
                postCode: postCode,
                country: country,
                client: client,
                type: type},
            repository);
        return res.status(200).json({address: address});
    } catch (err) {
        return res.status(500).json({msg:'Could not update address', error: err});
    }
}

const getList = async(req, res) => {
    const params = {};

    try {
        const addresses = await listAddresses(params, repository);
        if(addresses.length === 0) return res.status(200).json({msg: 'No results where found'})
        return res.status(200).json({addresses: addresses, length: addresses.length});
    } catch (err) {
        return res.status(500).json({msg:'Could not retrieve list', error: err});
    }
}

const remove = async(req, res) => {
    const {id} = req.params;

    try {
        await deleteAddress(id, repository);
        return res.status(200).json({msg:'Success'});
    } catch (err) {
        return res.status(500).json({msg:'Could not delete address', error: err});
    }
}

module.exports = {create: create, update: update, remove: remove, getList: getList}
