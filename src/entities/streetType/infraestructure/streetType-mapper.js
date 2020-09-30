const {StreetType} = require("../domain/streetType");

const mapTo = (dbStreetType) => {
    const {id, name} = dbStreetType;

    return new StreetType(id, name);
}

module.exports = {mapTo: mapTo}
