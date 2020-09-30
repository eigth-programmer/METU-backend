const {Product} = require("../domain/product");

const mapTo = (dbProduct) => {
    const {id,
        name,
        price,
        brand,
        description,
        images,
        categories,
        taxes,
        features,
        discounts,
        stock} = dbProduct;

    return new Product(id,
        name,
        price,
        brand,
        description,
        images,
        categories,
        taxes,
        features,
        discounts,
        stock);
}

module.exports = {mapTo: mapTo}
