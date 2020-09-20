const MongoDiscount = require('../../../db/mongoose/schemas/discount-schema');
const {Discount} = require('../domain/discount');
const {DiscountRepository} = require('../domain/discount-repository')

class DiscountMongoRepository extends DiscountRepository{
    async create(discount) {
        const newDiscount = new MongoDiscount(discount);
        const {id, name, validity, amount, description} = await newDiscount.save();
        return new Discount(id, name, validity, amount, description);
    }

    async update(discount) {
        console.log(discount)
        const {id, name, validity, amount, description} = await MongoDiscount.findByIdAndUpdate(discount.id,
            {name: discount.name, validity: discount.validity, amount: discount.amount, description: discount.description});
        return new Discount(id, name, validity, amount, description);
    }

    async delete(id) {
        return MongoDiscount.findOneAndDelete(id);
    }

    async getList(params = {}) {
        const discounts = await MongoDiscount.find(params);
        let list = [];
        discounts.forEach(discount => {
            const {id, name, validity, amount, description} = discount;
            list.push(new Discount(id, name, validity, amount, description));
        });
         return list;
    }
}

module.exports = {DiscountMongoRepository: DiscountMongoRepository};