const {Brand} = require("../domain/brand");

const mapTo = (dbAddress) => {
    const {id, name} = dbAddress;
    return new Brand(id, name);
}

module.exports = {mapTo: mapTo}
