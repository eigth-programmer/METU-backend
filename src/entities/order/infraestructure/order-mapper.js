const {Order} = require("../domain/order");
const mapTo = (dbOrder) => {
    const {id,
        user,
        comment,
        state,
        created,
        discounts,
        lines,
        basePrice,
        taxesPrice,
        totalPrice,
        gifts,
        rating,
        address} = dbOrder;

    return new Order(id,
        user,
        comment,
        state,
        created,
        discounts,
        lines,
        basePrice,
        taxesPrice,
        totalPrice,
        gifts,
        rating,
        address);
}

module.exports = {mapTo: mapTo}
