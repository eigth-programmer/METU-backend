const MongoOrderState = require('../schemas/order-state-schema');
const {OrderStateRepository} = require('../../../entities/orderState/infraestructure/orderState-repository');
const {mapTo} = require('../../../entities/orderState/infraestructure/orderState-mapper');

class OrderStateMongoRepository extends OrderStateRepository {
    async getList(params = {}) {
        const states = await MongoOrderState.find(params);
        return states.map(state => mapTo(state));
    }
}

module.exports = {OrderStateMongoRepository: OrderStateMongoRepository};
