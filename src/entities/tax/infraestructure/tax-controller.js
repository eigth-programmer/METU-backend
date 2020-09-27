const createTax = require('../application/create-tax');
const deleteTax = require('../application/delete-tax');
const listTax = require('../application/list-tax');
const {TaxMongoRepository} = require('./tax-mongo-repository');
const repository = new TaxMongoRepository();

const create = async(req, res) => {

}

const getList = async(req, res) => {

}

const remove = async(req, res) => {

}

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

module.exports = {create: create, remove: remove, getList: getList}
