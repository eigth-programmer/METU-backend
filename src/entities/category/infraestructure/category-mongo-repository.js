const MongoCategory = require('../../../db/mongoose/schemas/category-schema');
const {Category} = require('../domain/category');
const {CategoryRepository} = require('../domain/category-repository');

class CategoryMongoRepository extends CategoryRepository {
    async create(category) {
        const newCategory = new MongoCategory(category);
        const {id, name} = await newCategory.save();
        return new Category(id, name);
    }

    async delete(id) {
        return MongoCategory.findOneAndDelete(id);
    }

    async getList(params = {}) {
        const categories = await MongoCategory.find(params);
        let list = [];
        categories.forEach(category => {
            const {id, name} = category;
            list.push(new Category(id, name));
        })
        return list;
    }
}

module.exports = {CategoryMongoRepository: CategoryMongoRepository};