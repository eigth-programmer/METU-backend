const MongoFeature = require('../../../db/mongoose/schemas/feature-schema');
const {FeatureRepository} = require('./feature-repository');
const {mapTo} = require('./feature-mapper');

class FeatureMongoRepository extends FeatureRepository {
    async create(feature) {
        const newFeature = new MongoFeature(feature);
        return mapTo(await newFeature.save());
    }

    async delete(id) {
        return MongoFeature.findOneAndDelete(id);
    }

    async getList(params = {}) {
        const features = await MongoFeature.find(params);
        return features.map(feature => mapTo(feature));
    }
}

module.exports = {FeatureMongoRepository: FeatureMongoRepository};
