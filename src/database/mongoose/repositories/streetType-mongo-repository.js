const MongoStreetType = require('../schemas/street-type-schema');
const {StreetTypeRepository} = require('../../../entities/streetType/infraestructure/streetType-repository');
const {mapTo} = require('../../../entities/streetType/infraestructure/streetType-mapper');

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
