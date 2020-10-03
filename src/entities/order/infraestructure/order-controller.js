const createOrder = require('../application/create-order');
const updateOrder = require('../application/update-order');
const deleteOrder = require('../application/delete-order');
const getOrder = require('../application/get-order');
const listOrders = require('../application/list-order');
const {OrderMongoRepository} = require('../../../database/mongoose/repositories/order-mongo-repository');
const repository = new OrderMongoRepository();

const create = async(req, res) => {
    const {user, comment, state, discounts, lines} = req.body;

    try {
        const order = await createOrder({
            user: user,
            comment: comment,
            state: state,
            discounts: discounts,
            lines: lines
        }, repository);
        return res.status(200).json({order: order});
    } catch (err) {
        return res.status(500).json({msg:'Could not register order'});
    }
}

const update = async(req, res) => {
    const {id} = req.params;
    const {user, comment, state, discounts, lines} = req.body;
    try {
        const order = await updateOrder({
            id: id,
            user: user,
            comment: comment,
            state: state,
            discounts: discounts,
            lines: lines
        }, repository);
        return res.status(200).json({order: order});
    } catch (err) {
        return res.status(500).json({msg:'Could not update order', error: err});
    }
}

const get = async(req, res) => {
    const {id} = req.params;

    try {
        const order = getOrder(id, repository);
        return res.status(200).json({order: order});
    } catch (err) {
        return res.status(500).json({msg:'Could not retrieve order', error: err});
    }
}

const getList = async(req, res) => {
    const params = {};

    try {
        const orders = await listOrders(params, repository);
        if(orders.length === 0) return res.status(200).json({msg: 'No results where found'});
        return res.status(200).json({orders: orders, length: orders.length});
    } catch (err) {
        return res.status(500).json({msg:'Could not retrieve list', error: err});
    }
}

const remove = async(req, res) => {
    const {id} = req.params;

    try {
        await deleteOrder(id, repository);
        return res.status(200).json({msg:'Success'});
    } catch (err) {
        return res.status(500).json({msg:'Could not delete order', error: err});
    }
}

module.exports = {create: create, update: update, remove: remove, getList: getList, get: get}
