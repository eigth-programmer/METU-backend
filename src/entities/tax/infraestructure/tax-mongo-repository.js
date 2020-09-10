const MongoTax = require('../../../db/mongoose/schemas/tax-schema');
const {Tax} = require('../domain/tax');
const {TaxRepository} = require('../domain/tax-repository');

class TaxMongoRepository extends TaxRepository {
    async create(tax) {
        const newTax = new MongoTax(tax);
        await newTax.save();
        return new Tax();
    }

    async delete(id) {
        return MongoTax.findByIdAndDelete(id);
    }

    async getList(params = {}) {
        const taxes = await MongoTax.find(params);
        return taxes.map( tax => {
            new Tax();
        })
    }
}

module.exports = {TaxMongoRepository: TaxMongoRepository};