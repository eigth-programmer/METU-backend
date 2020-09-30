const MongoOrderState = require('../../../db/mongoose/schemas/order-state-schema');
const {OrderStateRepository} = require('./orderState-repository');
const {mapTo} = require('./orderState-mapper');

class OrderStateMongoRepository extends OrderStateRepository {
    async getList(params = {}) {
        const states = await MongoOrderState.find(params);
        return states.map(state => mapTo(state));
    }
}

module.exports = {OrderStateMongoRepository: OrderStateMongoRepository};
