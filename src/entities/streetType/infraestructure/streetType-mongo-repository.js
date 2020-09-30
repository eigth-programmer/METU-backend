const MongoStreetType = require('../../../db/mongoose/schemas/street-type-schema');
const {StreetTypeRepository} = require('./streetType-repository');
const {mapTo} = require('./streetType-mapper');

class StreetTypeMongoRepository extends StreetTypeRepository {
    async create(streetType) {
        const newStreetType = new MongoStreetType(streetType);
        return mapTo(await newStreetType.save());
    }

    async delete(id) {
        return MongoStreetType.findByIdAndDelete(id);
    }

    async getList(params = {}) {
        const streetTypes = await MongoStreetType.find(params);

        return streetTypes.map(streetType => mapTo(streetType));
    }
}

module.exports = {StreetTypeMongoRepository: StreetTypeMongoRepository};
