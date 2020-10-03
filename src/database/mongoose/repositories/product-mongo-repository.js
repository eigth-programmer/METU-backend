const MongoProduct = require('../schemas/product-schema');
const {ProductRepository} = require('../../../entities/product/infraestructure/product-repository');
const {mapTo} = require('../../../entities/product/infraestructure/product-mapper');

class ProductMongoRepository extends ProductRepository{
    async create(product) {
        const newProduct = new MongoProduct(product);
        return mapTo(await newProduct.save());
    }

    async update(product) {
        const update = {
            name: product.name,
            price: product.price,
            brand: product.brand,
            description: product.description,
            images: product.images,
            categories: product.categories,
            taxes: product.taxes,
            features: product.features,
            discounts: product.discounts,
            stock: product.stock
        };

        return mapTo(await MongoProduct.findByIdAndUpdate(product.id, update, {new: true}));
    }

    async delete(id) {
        return MongoProduct.findOneAndDelete(id);
    }

    async get(id) {
        let retProduct = null;
        const product = await MongoProduct.findById(id);
        if(product) { retProduct = mapTo(product); }
        return retProduct;
    }

    async getList(params = {}) {
        const products = await MongoProduct.find(params);

        return products.map(product => mapTo(product));
    }
}

module.exports = {ProductMongoRepository: ProductMongoRepository};
