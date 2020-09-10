const createFeature = require('../application/create-feature');
const deleteFeature = require('../application/delete-feature');
const listFeatures = require('../application/list-features');
const {FeatureMongoRepository} = require('./feature-mongo-repository');
const repository = new FeatureMongoRepository();

class FeatureController {
    async create(feature){
        return await createFeature(feature, repository);
    }

    async delete(id) {
        return await deleteFeature(id, repository);
    }

    async getList(params){
        return await listFeatures(params, repository);
    }
}

module.exports = { FeatureController: FeatureController}