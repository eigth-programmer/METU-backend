const MongoDiscount = require('../schemas/discount-schema');
const {DiscountRepository} = require('../../../entities/discount/infraestructure/discount-repository');
const {mapTo} = require('../../../entities/discount/infraestructure/discount-mapper');

class DiscountMongoRepository extends DiscountRepository{
    async create(discount) {
        const newDiscount = new MongoDiscount(discount);
        return mapTo(await newDiscount.save());
    }

    async update(discount) {
        const update = {
            name: discount.name,
            validity: discount.validity,
            amount: discount.amount,
            description: discount.description}

        return mapTo(await MongoDiscount.findByIdAndUpdate(discount.id, update, {new: true}));
    }

    async delete(id) {
        return MongoDiscount.findOneAndDelete(id);
    }

    async getList(params = {}) {
        const discounts = await MongoDiscount.find(params);

        return discounts.map(discount => mapTo(discount));
    }
}

module.exports = {DiscountMongoRepository: DiscountMongoRepository};
