class Product {
    constructor(id, name, price, brand, description, images, categories, taxes, features, discounts, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.description = description;
        this.images = images;
        this.categories = categories;
        this.taxes = taxes;
        this.features = features;
        this.discounts = discounts;
        this.stock = stock;
    }
}

module.exports = { Product: Product}