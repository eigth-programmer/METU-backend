const createDiscount = require('../application/create-discount');
const updateDiscount = require('../application/update-discount');
const deleteDiscount = require('../application/delete-discount');
const listDiscount = require('../application/list-discount');
const {DiscountMongoRepository} = require('../../../database/mongoose/repositories/discount-mongo-repository');
const repository = new DiscountMongoRepository();

const create = async(req, res) => {
    const {name, amount, description, validity} = req.body;

    try {
        const discount = await createDiscount({name: name, amount: amount, description: description, validity: validity}, repository);
        return res.status(200).json({discount: discount});
    } catch (err) {
        return res.status(500).json({msg:'Could not register discount'})
    }
}

const update = async(req, res) => {
    const {id} = req.params;
    const {name, amount, description, validity} = req.body;
    try {
        const discount = await updateDiscount({id: id, name: name, amount: amount, description: description, validity: validity}, repository)
        return res.status(200).json({discount: discount});
    } catch (err) {
        return res.status(500).json({msg:'Could not update discount', error: err});
    }
}

const getList = async(req, res) => {
    const params = {};

    try {
        const discounts = await listDiscount(params, repository);
        if(discounts.length === 0) return res.status(200).json({msg: 'No results where found'});
        return res.status(200).json({discounts: discounts, length: discounts.length});
    } catch (err) {
        return res.status(500).json({msg:'Could not retrieve list', error: err});
    }
}

const remove = async(req, res) => {
    const {id} = req.params;

    try {
        await deleteDiscount(id, repository);
        return res.status(200).json({msg:'Success'});
    } catch (err) {
        return res.status(500).json({msg:'Could not delete discount', error: err});
    }
}

module.exports = {create: create, update: update, remove: remove, getList: getList}
