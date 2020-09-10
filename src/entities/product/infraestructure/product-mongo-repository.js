const MongoProduct = require('../../../db/mongoose/schemas/product-schema');
const {Product} = require('../domain/product');
const {ProductRepository} = require('../domain/product-repository')

class ProductMongoRepository extends ProductRepository{
    async create(product) {
        const newProduct = new MongoProduct(product);
        await newProduct.save();
        return new Product(newProduct);
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
        if(product.length > 0) retProduct = new Product(product[0]);
        return retProduct;
    }

    async getList(params = {}) {
        const products = await MongoProduct.find(params);
        return products.map( product => {
            new Product(product);
        });
    }
}

module.exports = {ProductMongoRepository: ProductMongoRepository};
