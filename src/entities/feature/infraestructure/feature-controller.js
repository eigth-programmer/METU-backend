const createFeature = require('../application/create-feature');
const deleteFeature = require('../application/delete-feature');
const listFeatures = require('../application/list-features');
const {FeatureMongoRepository} = require('./feature-mongo-repository');
const repository = new FeatureMongoRepository();

const create = async(req, res) => {
    const {name, unit} = req.body;

    try {
        const feature = await createFeature({name: name, unit: unit}, repository);
        return res.status(200).json({feature: feature});
    } catch (err) {
        return res.status(500).json({msg:'Could not register feature', error: err})
    }
}

const getList = async(req, res) => {
    const params = {};

    try {
        const features = await listFeatures(params, repository);
        if(features.length === 0) return res.status(200).json({msg: 'No results where found'});
        return res.status(200).json({features: features, length: features.length});
    } catch (err) {
        return res.status(500).json({msg:'Could not retrieve list', error: err})
    }
}

const remove = async(req, res) => {
    const id = req.params;

    try {
        await deleteFeature(id, repository)
        return res.status(200).json({msg:'Success'});
    } catch (err) {
        return res.status(500).json({msg:'Could not delete feature', error: err})
    }
}

module.exports = {create: create, remove: remove, getList: getList}
