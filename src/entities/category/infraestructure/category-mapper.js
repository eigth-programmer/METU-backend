const {Category} = require('../domain/category');

const mapTo = (dbAddress) => {
    const {id, name} = dbAddress;
    return new Category(id, name);
}

module.exports = {mapTo: mapTo}
