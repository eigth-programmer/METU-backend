const createDiscount = require('../application/create-discount');
const updateDiscount = require('../application/update-discount');
const deleteDiscount = require('../application/delete-discount');
const listDiscount = require('../application/list-discount');
const {DiscountMongoRepository} = require('./discount-mongo-repository');
const repository = new DiscountMongoRepository();

class DiscountController {
    async create(discount){
        return await createDiscount(discount, repository);
    }

    async update(discount){
        return await updateDiscount(discount, repository);
    }

    async delete(id) {
        return await deleteDiscount(id, repository);
    }

    async getList(params){
        return await listDiscount(params, repository);
    }
}

module.exports = { DiscountController: DiscountController}