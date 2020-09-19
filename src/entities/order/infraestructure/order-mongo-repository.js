const MongoOrder = require('../../../db/mongoose/schemas/order-schema');
const {Order} = require('../domain/order');
const {OrderRepository} = require('../domain/order-repository')

class OrderMongoRepository extends OrderRepository{
    async create(order) {
        const newOrder = new MongoOrder(order);
        await newOrder.save();
        return new Order(newOrder);
    }

    async update(order) {
        const updateOrder = new MongoOrder(order);
        await updateOrder.findByIdAndUpdate(order.id, order);
    }

    async delete(id) {
        return MongoOrder.findOneAndDelete(id);
    }

    async get(id) {
        let retOrder = null;
        const order = await MongoOrder.findById(id);
        if(order.length > 0) retOrder = new Order(order[0]);
        return retOrder;
    }

    async getList(params = {}) {
        const orders = await MongoOrder.find(params);
        return orders.map( order => {
            new Order(order);
        });
    }
}

module.exports = {OrderMongoRepository: OrderMongoRepository};