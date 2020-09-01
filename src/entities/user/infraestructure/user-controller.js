const {CreateUser} = require("../application/create-user");
const {UpdateUser} = require("../application/update-user");
const {DeleteUser} = require("../application/delete-user");
const {GetUser} = require("../application/get-user");
const {ListUser} = require("../application/list-user");
const {GetUserByEmail} = require("../application/get-user-by-email");

module.exports = class UserController{
    async createUser(user){
        const context = {};
        const {nickName, password, role, email} = user;
        return await CreateUser(null, nickName, password, role, email, context);
    }

    async updateUser(user) {
        const context = {};
        const { id, nickName, password, role, email } = user;
        return await UpdateUser(id, nickName, password, role, email, context);
    }

    async delete(id) {
        const context = {};
        return await DeleteUser(id, context);
    }

    async get(id) {
        const context = {};
        return await GetUser(id, context);
    }

    async list() {
        const context = {};
        return await ListUser(context);
    }

    async getUserByEmail(email){
        return await GetUserByEmail(email, context);
    }
}