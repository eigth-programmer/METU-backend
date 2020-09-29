const MongoBrand = require('../../../db/mongoose/schemas/brand-schema');
const {Brand} = require('../domain/brand');
const {BrandRepository} = require('../domain/brand-repository');

class BrandMongoRepository extends BrandRepository {
    async create(brand) {
        const newBrand = new MongoBrand(brand);
        const {id, name} = await newBrand.save();
        return new Brand(id, name);
    }

    async delete(id) {
        return MongoBrand.findByIdAndDelete(id);
    }

    async getList(params = {}) {
        const brands = await MongoBrand.find(params);
        let list = [];
        brands.forEach(unit => {
            const {id, name} = unit;
            list.push(new Brand(id, name));
        });
        return list;
    }
}

module.exports = {BrandMongoRepository: BrandMongoRepository};
