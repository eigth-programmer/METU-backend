const createCategory = require('../application/create-category');
const deleteCategory = require('../application/delete-category');
const listCategories = require('../application/list-category');
const {CategoryMongoRepository} = require('./category-mongo-repository');
const repository = new CategoryMongoRepository();

class CategoryController {
    async create(category){
        return await createCategory(category, repository);
    }

    async delete(id) {
        return await deleteCategory(id, repository);
    }

    async getList(params){
        return await listCategories(params, repository);
    }
}

module.exports = { CategoryController: CategoryController}