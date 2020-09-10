const MongoCategory = require('../../../db/mongoose/schemas/category-schema');
const {Category} = require('../domain/category');
const {CategoryRepository} = require('../domain/category-repository');

class CategoryMongoRepository extends CategoryRepository {
    async create(category) {
        const newCategory = new MongoCategory(category);
        await newCategory.save();
        return new Category();
    }

    async delete(id) {
        return MongoCategory.findByIdAndDelete(id);
    }

    async getList(params = {}) {
        const features = await MongoCategory.find(params);
        return features.map( feature => {
            new Category();
        })
    }
}

module.exports = {CategoryRepository: CategoryMongoRepository};