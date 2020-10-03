const createProduct = require('../application/create-product');
const updateProduct = require('../application/update-product');
const deleteProduct = require('../application/delete-product');
const getProduct = require('../application/get-product');
const listProducts = require('../application/list-product');
const {ProductMongoRepository} = require('../../../database/mongoose/repositories/product-mongo-repository');
const repository = new ProductMongoRepository();

const create = async(req, res) => {
    let fileList = [];
    const {name, price, brand, description, categories, taxes, features, discounts, stock} = req.body;
    req.files.forEach(file => {
        fileList.push({path: file.path});
    });

    try {
        const product = await createProduct({
            name: name,
            price: price,
            brand: brand,
            description: description,
            images: fileList,
            categories: categories,
            taxes: taxes,
            features: features,
            discounts: discounts,
            stock: stock
        }, repository);
        return res.status(200).json({product: product});
    } catch(err) {
        return res.status(500).json({msg: 'Could not update product', error: err});
    }
}

const update = async(req, res) => {
    const {id} = req.params;
    const {name, price, brand, description, categories, taxes, features, discounts, stock} = req.body;
    let fileList = [];

    req.files.forEach(file => {
        fileList.push(file.path);
    });

    try {
        const product = await updateProduct({
            id: id,
            name: name,
            price: price,
            brand: brand,
            description: description,
            images: fileList,
            categories: categories,
            taxes: taxes,
            features: features,
            discounts: discounts,
            stock: stock
        }, repository);
        return res.status(200).json({product: product});
    } catch(err) {
        return res.status(500).json({msg:'Could not update product', error: err});
    }
}

const get = async(req, res) => {
    const {id} = req.params;

    try {
        const product = await listProducts(id, repository);
        return res.status(200).json({product: product});
    } catch(err) {
        return res.status(500).json({msg:'Could not retrieve product', error: err});
    }
}

const getList = async(req, res) => {
    const params = {};

    try {
        const products = await listProducts(params, repository);
        if(products.length === 0) return res.status(200).json({msg: 'No results where found'});
        return res.status(200).json({products: products, length: products.length});
    } catch(err) {
        return res.status(500).json({msg:'Could not retrieve list', error: err});
    }
}

const remove = async(req, res) => {
    const {id} = req.params;

    try {
        await deleteProduct(id, repository);
        return res.status(200).json({msg:'Success'});
    } catch(err) {
        return res.status(500).json({msg:'Could not delete product', error: err});
    }
}

module.exports = {
    create: create,
    update: update,
    get: get,
    getList: getList,
    remove: remove}
