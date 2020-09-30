const MongoOrder = require('../../../db/mongoose/schemas/order-schema');
const {Order} = require('../domain/order');
const {OrderRepository} = require('./order-repository')

class OrderMongoRepository extends OrderRepository{
    async create(order) {
        const newOrder = new MongoOrder(order);
        const {id, user, comment, state, created, discounts, lines} = await newOrder.save();
        return new Order(id, user, comment, state, created, discounts, lines);
    }

    async update(order) {
        const {id, user, comment, state, created, discounts, lines} = await MongoOrder
            .findByIdAndUpdate(order.id, {
                user: order.user,
                comment: order.comment,
                state: order.state,
                discounts: order.discounts,
                lines: order.lines
            });
        return new Order(id, user, comment, state, created, discounts, lines);
    }

    async delete(id) {
        return MongoOrder.findByIdAndDelete(id);
    }

    async get(id) {
        let retOrder = null;
        const order = await MongoOrder.findById(id);
        if(order) {
            const {id, user, comment, state, created, discounts, lines} = order;
            retOrder = new Order(id, user, comment, state, created, discounts, lines);
        }
        return retOrder;
    }

    async getList(params = {}) {
        const orders = await MongoOrder.find(params);
        let list = [];
        orders.forEach(order => {
            const {id, user, comment, state, created, discounts, lines} = order;
            list.push(new Order(id, user, comment, state, created, discounts, lines));
        });
        return list;
    }
}

module.exports = {OrderMongoRepository: OrderMongoRepository};
