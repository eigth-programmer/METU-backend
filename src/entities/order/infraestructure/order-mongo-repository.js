const MongoOrder = require('../../../db/mongoose/schemas/order-schema');
const {OrderRepository} = require('./order-repository');
const {mapTo} = require('./order-mapper');

class OrderMongoRepository extends OrderRepository{
    async create(order) {
        const newOrder = new MongoOrder(order);

        return mapTo(await newOrder.save());
    }

    async update(order) {
        const update = {
            user: order.user,
            comment: order.comment,
            state: order.state,
            discounts: order.discounts,
            lines: order.lines
        }

        return mapTo(await MongoOrder.findByIdAndUpdate(order.id, update, {new: true}));
    }

    async delete(id) {
        return MongoOrder.findByIdAndDelete(id);
    }

    async get(id) {
        let retOrder = null;
        const order = await MongoOrder.findById(id);
        if(order) {retOrder = mapTo(order);}
        return retOrder;
    }

    async getList(params = {}) {
        const orders = await MongoOrder.find(params);

        return orders.map(order => mapTo(order));
    }
}

module.exports = {OrderMongoRepository: OrderMongoRepository};
