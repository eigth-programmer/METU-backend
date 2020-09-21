const MongoTax = require('../../../db/mongoose/schemas/tax-schema');
const {Tax} = require('../domain/tax');
const {TaxRepository} = require('../domain/tax-repository');

class TaxMongoRepository extends TaxRepository {
    async create(tax) {
        const newTax = new MongoTax(tax);
        const {id, name, amount} = await newTax.save();
        return new Tax(id, name, amount);
    }

    async delete(id) {
        return MongoTax.findByIdAndDelete(id);
    }

    async getList(params = {}) {
        const taxes = await MongoTax.find(params);
        let list = [];
        taxes.forEach(tax => {
            const {id, name, amount} = tax;
            list.push(new Tax(id, name, amount));
        });
        return list;
    }
}

module.exports = {TaxMongoRepository: TaxMongoRepository};