const createOrder = require('../application/create-order');
const updateOrder = require('../application/update-order');
const deleteOrder = require('../application/delete-order');
const getOrder = require('../application/get-order');
const listOrders = require('../application/list-order');
const {OrderMongoRepository} = require('./order-mongo-repository');
const repository = new OrderMongoRepository();

class OrderController {
    async create(order){
        return await createOrder(order, repository);
    }

    async update(order){
        return await updateOrder(order, repository);
    }

    async delete(id) {
        return await deleteOrder(id, repository);
    }

    async get(id){
        return await getOrder(id, repository);
    }

    async getList(params){
        return await listOrders(params, repository);
    }
}

module.exports = { OrderController: OrderController}