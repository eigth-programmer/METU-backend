const MongoCategory = require('../../../db/mongoose/schemas/category-schema');
const {CategoryRepository} = require('./category-repository');
const {mapTo} = require('./category-mapper');

class CategoryMongoRepository extends CategoryRepository {
    async create(category) {
        const newCategory = new MongoCategory(category);
        return mapTo(await newCategory.save());
    }

    async delete(id) {
        return MongoCategory.findOneAndDelete(id);
    }

    async getList(params = {}) {
        const categories = await MongoCategory.find(params);
        return categories.map(category => mapTo(category));
    }
}

module.exports = {CategoryMongoRepository: CategoryMongoRepository};
