const MongoBrand = require('../schemas/brand-schema');
const {BrandRepository} = require('../../../entities/brand/infrastructure/brand-repository');
const {mapTo} = require('../../../entities/brand/infrastructure/brand-mapper');

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
