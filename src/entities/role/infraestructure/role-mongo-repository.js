const MongoRole = require('../../../db/mongoose/schemas/role-schema');
const {Role} = require("../domain/role");

class RoleMongoRepository {
    async get(id) {
        let retRole = null;
        const role = await MongoRole.findById(id);
        if(role.length > 0) retRole = new Role(role[0].name)
        return retRole;
    }
}

module.exports = {RoleMongoRepository: RoleMongoRepository}