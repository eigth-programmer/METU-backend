const MongoFeature = require('../../../db/mongoose/schemas/feature-schema');
const {Feature} = require('../domain/feature');
const {FeatureRepository} = require('../domain/feature-repository');

class FeatureMongoRepository extends FeatureRepository {
    async create(feature) {
        const newFeature = new MongoFeature(feature);
        await newFeature.save();
        return new Feature();
    }

    async delete(id) {
        return MongoFeature.findByIdAndDelete(id);
    }

    async getList(params = {}) {
        const features = await MongoFeature.find(params);
        return features.map( feature => {
            new Feature();
        })
    }
}

module.exports = {FeatureMongoRepository: FeatureMongoRepository};