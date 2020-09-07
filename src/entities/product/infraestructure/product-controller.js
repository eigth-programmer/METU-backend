const createProduct = require('../application/create-product');
const updateProduct = require('../application/update-product');
const deleteProduct = require('../application/delete-product');
const getProduct = require('../application/get-product');
const listProducts = require('../application/list-product');
const getProductByName = require('../application/get-product-by-name');
const {ProductMongoRepository} = require('./product-mongo-repository');
const repository = new ProductMongoRepository();

class ProductController {
    async create(product){
        return await createProduct(product, repository);
    }
    
    async update(product){
        return await updateProduct(product, repository);
    }

    async delete(id) {
        return await deleteProduct(id, repository);
    }

    async get(id){
        return await getProduct(id, repository);
    }

    async getList(params){
        return await listProducts(id, repository);
    }

    async getByName(name){
        return await getProductByName(name, repository);
    }
}

module.exports = { ProductController: ProductController}