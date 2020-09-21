const listOrderStates = require('../application/list-orderState');
const {OrderStateMongoRepository} = require('./orderState-mongo-repository');
const repository = new OrderStateMongoRepository();

class OrderStateController {
    async getList(params){
        return await listOrderStates(params, repository);
    }
}

module.exports = {OrderStateController: OrderStateController}