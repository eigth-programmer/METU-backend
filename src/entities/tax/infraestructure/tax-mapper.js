const {Tax} = require("../domain/tax");

const mapTo = (dbTax) => {
    const {id, name, amount} = dbTax;

    return new Tax(id, name, amount);
}

module.exports = {mapTo: mapTo}
