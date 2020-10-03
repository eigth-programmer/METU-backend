const MongoTax = require('../schemas/tax-schema');
const {TaxRepository} = require('../../../entities/tax/infraestructure/tax-repository');
const {mapTo} = require('../../../entities/tax/infraestructure/tax-mapper');

class TaxMongoRepository extends TaxRepository {
    async create(tax) {
        const newTax = new MongoTax(tax);

        return mapTo(await newTax.save());
    }

    async delete(id) {
        return MongoTax.findByIdAndDelete(id);
    }

    async getList(params = {}) {
        const taxes = await MongoTax.find(params);

        return taxes.map(tax => mapTo(tax));
    }
}

module.exports = {TaxMongoRepository: TaxMongoRepository};
