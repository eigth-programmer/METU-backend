const getRole = require('../application/get-role');
const getRoleByName = require('../application/get-role-by-name');
const {RoleMongoRepository} = require("./role-mongo-repository");
const repository = new RoleMongoRepository();

const get = async(id) => {
    return await getRole(id, repository);
}

const getByName = async(name) => {
    return await getRoleByName(name, repository);
}

module.exports = {get: get, getByName: getByName}
