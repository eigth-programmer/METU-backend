const MongoOrderState = require('../../../db/mongoose/schemas/order-state-schema');
const {OrderState} = require('../domain/orderState');
const {OrderStateRepository} = require('../domain/orderState-repository');

class OrderStateMongoRepository extends OrderStateRepository {
    async getList(params = {}) {
        const states = await MongoOrderState.find(params);
        let list = [];
        states.forEach(state => {
            const {id, name} = state;
            list.push(new OrderState(id, name));
        });
        return list;
    }
}

module.exports = {OrderStateMongoRepository: OrderStateMongoRepository};