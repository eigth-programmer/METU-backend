const createFeature = require('../application/create-feature');
const deleteFeature = require('../application/delete-feature');
const listFeatures = require('../application/list-features');
const {FeatureMongoRepository} = require('./feature-mongo-repository');
const repository = new FeatureMongoRepository();

const create = async(req, res) => {

}

const getList = async(req, res) => {

}

const remove = async(req, res) => {

}

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

module.exports = {create: create, remove: remove, getList: getList}
