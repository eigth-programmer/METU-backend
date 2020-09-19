const MongoUnit = require('../../../db/mongoose/schemas/unit-schema');
const {Unit} = require('../domain/unit');
const {UnitRepository} = require('../domain/unit-repository');

class UnitMongoRepository extends UnitRepository {
    async create(unit) {
        const newUnit = new MongoUnit(unit);
        await newUnit.save();
        return new Unit();
    }

    async delete(id) {
        return MongoUnit.findByIdAndDelete(id);
    }

    async getList(params = {}) {
        const units = await MongoUnit.find(params);
        return units.map(unit => {
            new Unit();
        })
    }
}

module.exports = {UnitMongoRepository: UnitMongoRepository};