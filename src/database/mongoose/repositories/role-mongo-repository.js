const MongoRole = require('../schemas/role-schema');
const {mapTo} = require('../../../entities/role/infraestructure/role-mapper');

class RoleMongoRepository {
    async get(id) {
        let retRole = null;
        const role = await MongoRole.findById(id);
        if(role) retRole = mapTo(role);
        return retRole;
    }

    async getByName(name) {
        let retRole = null;
        const role = await MongoRole.find({name: name});
        if(role.length > 0) retRole = mapTo(role[0]);
        return retRole;
    }
}

module.exports = {RoleMongoRepository: RoleMongoRepository}
