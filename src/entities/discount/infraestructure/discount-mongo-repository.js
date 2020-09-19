const MongoDiscount = require('../../../db/mongoose/schemas/discount-schema');
const {Discount} = require('../domain/discount');
const {DiscountRepository} = require('../domain/discount-repository')

class DiscountMongoRepository extends DiscountRepository{
    async create(discount) {
        const newDiscount = new MongoDiscount(discount);
        await newDiscount.save();
        return new Discount(newDiscount);
    }

    async update(discount) {
        const updateDiscount = new MongoDiscount(discount);
        await updateDiscount.findByIdAndUpdate(discount.id, discount);
    }

    async delete(id) {
        return MongoDiscount.findOneAndDelete(id);
    }

    async getList(params = {}) {
        const discounts = await MongoDiscount.find(params);
        return discounts.map( discount => {
            new Discount(discount);
        });
    }
}

module.exports = {ReviewMongoRepository: DiscountMongoRepository};