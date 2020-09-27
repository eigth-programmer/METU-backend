const createTax = require('../application/create-tax');
const deleteTax = require('../application/delete-tax');
const listTax = require('../application/list-tax');
const {TaxMongoRepository} = require('./tax-mongo-repository');
const repository = new TaxMongoRepository();

const create = async(req, res) => {
    const {name, amount} = req.body;

    try {
        const tax = createTax({name: name, amount: amount}, repository);
        return res.status(200).json({tax: tax});
    } catch (err) {
        return res.status(500).json({msg:'Could not register tax', error: err});
    }
}

const getList = async(req, res) => {
    const params = {};

    try {
        const taxes = await listTax(params, repository);
        if(taxes.length === 0) return res.status(200).json({msg: 'No results where found'})
        return res.status(200).json({taxes: taxes, length: taxes.length});
    } catch (err) {
        return res.status(500).json({msg:'Could not retrieve list', error: err});
    }
}

const remove = async(req, res) => {
    const {id} = req.params;

    try {
        await deleteTax(id, repository);
        return res.status(200).json({msg:'Success'});
    } catch (err) {
        return res.status(500).json({msg:'Could not delete tax', error: err});
    }
}

module.exports = {create: create, remove: remove, getList: getList}
