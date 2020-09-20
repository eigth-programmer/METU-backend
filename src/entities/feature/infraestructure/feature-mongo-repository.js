const MongoFeature = require('../../../db/mongoose/schemas/feature-schema');
const {Feature} = require('../domain/feature');
const {FeatureRepository} = require('../domain/feature-repository');

class FeatureMongoRepository extends FeatureRepository {
    async create(feature) {
        const newFeature = new MongoFeature(feature);
        const {id, name, unit} = await newFeature.save();
        return new Feature(id, name, unit);
    }

    async delete(id) {
        return MongoFeature.findOneAndDelete(id);
    }

    async getList(params = {}) {
        const features = await MongoFeature.find(params);
        let list = [];
        features.forEach(feature=> {
            const {id, name, unit} = feature;
            list.push(new Feature(id, name, unit))});
        return list;
    }
}

module.exports = {FeatureMongoRepository: FeatureMongoRepository};