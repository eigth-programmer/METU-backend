const MongoStreetType = require('../../../db/mongoose/schemas/street-type-schema');
const {StreetType} = require('../domain/streetType');
const {StreetTypeRepository} = require('../domain/streetType-repository');

class StreetTypeMongoRepository extends StreetTypeRepository {
    async create(streetType) {
        const newStreetType = new MongoStreetType(streetType);
        const {id, name} = await newStreetType.save();
        return new StreetType(id, name);
    }

    async delete(id) {
        return MongoStreetType.findByIdAndDelete(id);
    }

    async getList(params = {}) {
        const streetTypes = await MongoStreetType.find(params);
        let list = [];
        streetTypes.forEach(streetType => {
            const {id, name} = streetType;
            list.push(new StreetType(id, name));
        });
        return list;
    }
}

module.exports = {StreetTypeMongoRepository: StreetTypeMongoRepository};