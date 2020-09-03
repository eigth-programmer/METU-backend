const MongoRole = require('../../../db/mongoose/schemas/role-schema');
class RoleMongoRepository {
    async get(id) {
        const role = await MongoRole.findById(id);
        return new Role(role.name);
    }
}

module.exports = {RoleMongoRepository: RoleMongoRepository}