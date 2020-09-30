const {Unit} = require("../domain/unit");
const mapTo = (dbUnit) => {
    const {id, name, symbol} = dbUnit;

    return new Unit(id, name, symbol);
}

module.exports = {mapTo: mapTo}
