const createUnit = require('../application/create-unit');
const deleteUnit = require('../application/delete-unit');
const listUnits = require('../application/list-unit');
const {UnitMongoRepository} = require('./unit-mongo-repository');
const repository = new UnitMongoRepository();

const create = async(req, res) => {

}

const getList = async(req, res) => {

}

const remove = async(req, res) => {

}

class UnitController {
    async create(unit){
        return await createUnit(unit, repository);
    }

    async delete(id) {
        return await deleteUnit(id, repository);
    }

    async getList(params){
        return await listUnits(params, repository);
    }
}

module.exports = {create: create, remove: remove, getList: getList}
