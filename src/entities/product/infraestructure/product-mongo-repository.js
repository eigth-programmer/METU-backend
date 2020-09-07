const MongoProduct = require('../../../db/mongoose/schemas/product-schema');
const {Product} = require('../domain/product');
const {ProductRepository} = require('../domain/product-repository')

class ProductMongoRepository extends ProductRepository{
    async create(product) {
        const newProduct = new MongoProduct(product);
        await newProduct.save();
        return new Product(
            newProduct[0].name,
            newProduct[0].price,
            newProduct[0].brand,
            newProduct[0].description,
            newProduct[0].images,
            newProduct[0].categories,
            newProduct[0].taxes,
            newProduct[0].features);
    }

    async update(product) {
        const updateUser = new MongoProduct(product);
        await updateUser.findByIdAndUpdate(product.id, product);
    }

    async delete(id) {
        return MongoProduct.findOneAndDelete(id);
    }

    async get(id) {
        let retProduct = null;
        const product = await MongoProduct.findById(id);
        if(product.length > 0) retProduct = new Product(
            product[0].name,
            product[0].price,
            product[0].brand,
            product[0].description,
            product[0].images,
            product[0].categories,
            product[0].taxes,
            product[0].features);
        return retProduct;
    }

    async getList(params = {}) {
        const products = await MongoProduct.find(params);
        return products.map( product => {

        });
    }

    async getByName(name) {
        let retProduct = null;
        const product = await MongoProduct.find({ name: name });
        if(product.length > 0) retProduct = new Product(
            product[0].name,
            product[0].price,
            product[0].brand,
            product[0].description,
            product[0].images,
            product[0].categories,
            product[0].taxes,
            product[0].features
        );
        return retProduct;
    }
}

module.exports = {ProductMongoRepository: ProductMongoRepository};
