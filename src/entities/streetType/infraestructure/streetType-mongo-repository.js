const MongoStreetType = require('../../../db/mongoose/schemas/street-type-schema');
const {StreetType} = require('../domain/streetType');
const {StreetTypeRepository} = require('../domain/streetType-repository');

class StreetTypeMongoRepository extends StreetTypeRepository {
    async create(streetType) {
        const newStreetType = new MongoStreetType(streetType);
        await newStreetType.save();
        return new StreetType();
    }

    async delete(id) {
        return MongoStreetType.findByIdAndDelete(id);
    }

    async getList(params = {}) {
        const streetTypes = await MongoStreetType.find(params);
        return streetTypes.map(streetType => {
            new StreetType();
        })
    }
}

module.exports = {StreetTypeMongoRepository: StreetTypeMongoRepository};