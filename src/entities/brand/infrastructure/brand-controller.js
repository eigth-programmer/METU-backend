const createBrand = require('../application/create-brand');
const deleteBrand = require('../application/delete-brand');
const listBrands = require('../application/list-brand');
const {BrandMongoRepository} = require('../infrastructure/brand-mongo-repository');
const repository = new BrandMongoRepository();

const create = async(req, res) => {
    const {name} = req.params;

    try {
        const unit = await createBrand({name: name}, repository)
        return res.status(200).json({unit: unit});
    } catch (err) {
        return res.status(500).json({msg:'Could not register unit'})
    }
}

const getList = async(req, res) => {
    const params = {}

    try {
        const brands = listBrands(params, repository);
        if(brands.length === 0) return res.status(200).json({msg: 'No results where found'})
        return res.status(200).json({brands: brands, length: brands.length});
    } catch (err) {
        return res.status(500).json({msg:'Could not retrieve list', error: err})
    }
}

const remove = async(req, res) => {
    const {id} = req.params;

    try {
        await deleteBrand(id, repository);
        return res.status(200).json({msg:'Success'});
    } catch (err) {
        return res.status(500).json({msg:'Could not delete brand', error: err});
    }
}

module.exports = {create: create, remove: remove, getList: getList}
