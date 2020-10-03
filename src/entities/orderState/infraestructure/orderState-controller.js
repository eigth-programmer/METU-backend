const listOrderStates = require('../application/list-orderState');
const {OrderStateMongoRepository} = require('../../../database/mongoose/repositories/orderState-mongo-repository');
const repository = new OrderStateMongoRepository();

const getList = async(req, res) => {
    const params = {};

    try {
        const states = await listOrderStates(params, repository);
        if(states.length === 0) return res.status(200).json({msg: 'No results where found'});
        return res.status(200).json({states: states, length: states.length});
    } catch (err) {
        return res.status(500).json({msg:'Could not retrieve list'});
    }
}

module.exports = {getList: getList}
