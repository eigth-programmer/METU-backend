const MongoProduct = require('../../../db/mongoose/schemas/product-schema');
const {Product} = require('../domain/product');
const {ProductRepository} = require('../domain/product-repository')

class ProductMongoRepository extends ProductRepository{
    async create(product) {
        console.log(product);
        const newProduct = new MongoProduct(product);
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
            stock} = await newProduct.save();

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

    async update(product) {

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
            stock} = await MongoProduct.findByIdAndUpdate(product.id, {
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
        });

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

    async delete(id) {
        return MongoProduct.findOneAndDelete(id);
    }

    async get(id) {
        let retProduct = null;
        const product = await MongoProduct.findById(id);
        if(product) {
            retProduct = new Product(product.id,
                product.name,
                product.price,
                product.brand,
                product.description,
                product.images,
                product.categories,
                product.taxes,
                product.features,
                product.discounts,
                product.stock);
        }

        return retProduct;
    }

    async getList(params = {}) {
        const products = await MongoProduct.find(params);
        let list = [];
        products.forEach(product => {
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
                stock} = product;

            list.push(new Product(id,
                name,
                price,
                brand,
                description,
                images,
                categories,
                taxes,
                features,
                discounts,
                stock));
        })

        return list;
    }
}

module.exports = {ProductMongoRepository: ProductMongoRepository};
