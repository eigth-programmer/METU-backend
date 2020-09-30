const MongoBrand = require('../../../db/mongoose/schemas/brand-schema');
const {BrandRepository} = require('./brand-repository');
const {mapTo} = require('./brand-mapper');

class BrandMongoRepository extends BrandRepository {
    async create(brand) {
        const newBrand = new MongoBrand(brand);
        return mapTo(await newBrand.save());
    }

    async delete(id) {
        return MongoBrand.findByIdAndDelete(id);
    }

    async getList(params = {}) {
        const brands = await MongoBrand.find(params);
        return brands.map(brand => mapTo(brand));
    }
}

module.exports = {BrandMongoRepository: BrandMongoRepository};
