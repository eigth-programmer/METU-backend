const createTax = require('../application/create-tax');
const deleteTax = require('../application/delete-tax');
const listTax = require('../application/list-tax');
const {TaxMongoRepository} = require('./tax-mongo-repository');
const repository = new TaxMongoRepository();

class TaxController {
    async create(tax){
        return await createTax(tax, repository);
    }

    async delete(id) {
        return await deleteTax(id, repository);
    }

    async getList(params){
        return await listTax(params, repository);
    }
}

module.exports = { TaxController: TaxController}