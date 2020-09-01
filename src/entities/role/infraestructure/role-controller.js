const {GetRole} = require("../application/get-role");

module.exports = class RoleController {
    async get(id){
        const context = {};
        return await GetRole(id, context);
    }
}