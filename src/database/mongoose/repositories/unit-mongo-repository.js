const MongoUnit = require('../schemas/unit-schema');
const {UnitRepository} = require('../../../entities/unit/infraestructure/unit-repository');
const {mapTo} = require('../../../entities/unit/infraestructure/unit-mapper')

class UnitMongoRepository extends UnitRepository {
    async create(unit) {
        const newUnit = new MongoUnit(unit);

        return mapTo(await newUnit.save());
    }

    async delete(id) {
        return MongoUnit.findByIdAndDelete(id);
    }

    async getList(params = {}) {
        const units = await MongoUnit.find(params);

        return units.map(unit => mapTo(unit));
    }
}

module.exports = {UnitMongoRepository: UnitMongoRepository};
