const getRole = require('../application/get-role');
const {RoleMongoRepository} = require("./role-mongo-repository");
const repository = new RoleMongoRepository();

class RoleController {
    async get(id){
        return await getRole(id, repository);
    }
}

module.exports = {RoleController: RoleController}