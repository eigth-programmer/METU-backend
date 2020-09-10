class Product {
    constructor(name, price, brand, description, images, categories, taxes, features, stock) {
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.description = description;
        this.images = images;
        this.categories = categories;
        this.taxes = taxes;
        this.features = features;
        this.stock = stock;
    }
}

module.exports = { Product: Product}