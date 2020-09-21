const MongoUnit = require('../../../db/mongoose/schemas/unit-schema');
const {Unit} = require('../domain/unit');
const {UnitRepository} = require('../domain/unit-repository');

class UnitMongoRepository extends UnitRepository {
    async create(unit) {
        const newUnit = new MongoUnit(unit);
        const {id, name, symbol} = await newUnit.save();
        return new Unit(id, name, symbol);
    }

    async delete(id) {
        return MongoUnit.findByIdAndDelete(id);
    }

    async getList(params = {}) {
        const units = await MongoUnit.find(params);
        let list = [];
        units.forEach(unit => {
            const {id, name, symbol} = unit;
            list.push(new Unit(id, name, symbol));
        });
        return list;
    }
}

module.exports = {UnitMongoRepository: UnitMongoRepository};