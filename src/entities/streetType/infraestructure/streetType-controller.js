const createStreetType = require('../application/create-streetType');
const deleteStreetType = require('../application/delete-streetType');
const listStreetType = require('../application/list-streetType');
const {StreetTypeMongoRepository} = require('./streetType-mongo-repository');
const repository = new StreetTypeMongoRepository();

const create = async(req, res) => {

}

const getList = async(req, res) => {

}

const remove = async(req, res) => {

}

class StreetTypeController {
    async create(streetType){
        return await createStreetType(streetType, repository);
    }

    async delete(id) {
        return await deleteStreetType(id, repository);
    }

    async getList(params){
        return await listStreetType(params, repository);
    }
}

module.exports = {create: create, remove: remove, getList: getList}
