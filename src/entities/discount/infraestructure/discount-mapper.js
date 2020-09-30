const {Discount} = require("../domain/discount");

const mapTo = (dbDiscount) => {
    const {id, name, validity, amount, description} = dbDiscount;

    return new Discount(id, name, validity, amount, description);
}

module.exports = {mapTo: mapTo}
