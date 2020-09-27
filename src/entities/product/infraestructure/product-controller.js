const createProduct = require('../application/create-product');
const updateProduct = require('../application/update-product');
const deleteProduct = require('../application/delete-product');
const getProduct = require('../application/get-product');
const listProducts = require('../application/list-product');
const {ProductMongoRepository} = require('./product-mongo-repository');
const repository = new ProductMongoRepository();

const create = async(req, res) => {

}

const update = async(req, res) => {

}

const getList = async(req, res) => {

}

const remove = async(req, res) => {

}

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
        return await listProducts(params, repository);
    }
}

module.exports = {create: create, update: update, remove: remove, getList: getList}
