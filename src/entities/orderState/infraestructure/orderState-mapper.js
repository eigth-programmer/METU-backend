const {OrderState} = require("../domain/orderState");

const mapTo = (dbOrderState) => {
    const {id, name} = dbOrderState;
    return new OrderState(id, name);
}

module.exports = {mapTo: mapTo}
