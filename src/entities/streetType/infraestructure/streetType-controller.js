const createStreetType = require('../application/create-streetType');
const deleteStreetType = require('../application/delete-streetType');
const listStreetType = require('../application/list-streetType');
const {StreetTypeMongoRepository} = require('../../../database/mongoose/repositories/streetType-mongo-repository');
const repository = new StreetTypeMongoRepository();

const create = async(req, res) => {
    const {name} = req.body;

    try {
        const streetType = await createStreetType({name: name});
        return res.status(200).json({streetType: streetType});
    } catch(err) {
        return res.status(500).json({msg:'Could not register street type', error: err});
    }
}

const getList = async(req, res) => {
    const params = {};

    try {
        const streetTypes = await listStreetType(params, repository);
        if(streetTypes.length === 0) return res.status(200).json({msg: 'No results where found'})
        return res.status(200).json({streetTypes: streetTypes, length: streetTypes.length});
    } catch(err) {
        return res.status(500).json({msg:'Could not retrieve list', error: err})
    }
}

const remove = async(req, res) => {
    const {id} = req.params;

    try {
        await deleteStreetType(id, repository);
        return res.status(200).json({msg:'Success'});
    } catch(err) {
        return res.status(500).json({msg:'Could not delete street type', error: err});
    }
}

module.exports = {create: create, remove: remove, getList: getList}
