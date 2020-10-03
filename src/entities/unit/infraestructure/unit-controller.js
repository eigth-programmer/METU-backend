const createUnit = require('../application/create-unit');
const deleteUnit = require('../application/delete-unit');
const listUnits = require('../application/list-unit');
const {UnitMongoRepository} = require('../../../database/mongoose/repositories/unit-mongo-repository');
const repository = new UnitMongoRepository();

const create = async(req, res) => {
    const {name, symbol} = req.params;

    try {
        const unit = await createUnit({name: name, symbol: symbol }, repository)
        return res.status(200).json({unit: unit});
    } catch (err) {
        return res.status(500).json({msg:'Could not register unit'})
    }
}

const getList = async(req, res) => {
    const params = {}

    try {
        const units = await listUnits(params, repository);
        if(units.length === 0) return res.status(200).json({msg: 'No results where found'})
        return res.status(200).json({units: units, length: units.length});
    } catch (err) {
        return res.status(500).json({msg:'Could not retrieve list', error: err})
    }
}

const remove = async(req, res) => {
    const {id} = req.params;

    try {
        await deleteUnit(id, repository);
        return res.status(200).json({msg:'Success'});
    } catch (err) {
        return res.status(500).json({msg:'Could not delete unit', error: err});
    }
}

module.exports = {create: create, remove: remove, getList: getList}
