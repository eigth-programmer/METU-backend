const createCategory = require('../application/create-category');
const deleteCategory = require('../application/delete-category');
const listCategories = require('../application/list-category');
const {CategoryMongoRepository} = require('../../../database/mongoose/repositories/category-mongo-repository');
const repository = new CategoryMongoRepository();

const create = async(req, res) => {
    const {name} = req.body;

    try {
        const category = await createCategory({name: name}, repository);
        return res.status(200).json({category: category});
    } catch (err) {
        return res.status(500).json({msg:'Could not register category', error: err})
    }
}

const getList = async(req, res) => {
    const params = {}

    try {
        const categories = await listCategories(params, repository);
        if(categories.length === 0) return res.status(200).json({msg: 'No results where found'});
        return res.status(200).json({categories: categories, length: categories.length});
    } catch(err) {
        return res.status(500).json({msg:'Could not retrieve list', error: err});
    }
}

const remove = async(req, res) => {
    const {id} = req.params;

    try {
        await deleteCategory(id, repository);
        return res.status(200).json({msg:'Success'});
    } catch (err) {
        return res.status(500).json({msg:'Could not delete address', error: err});
    }
}

module.exports = {create: create, remove: remove, getList: getList}
