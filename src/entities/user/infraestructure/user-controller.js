import {CreateUser} from "../application/create-user";
import {UpdateUser} from "../application/update-user";
import {DeleteUser} from "../application/delete-user";
import {GetUser} from "../application/get-user";
import {ListUser} from "../application/list-user";
import {GetUserByEmail} from "../application/get-user-by-email";

export class UserController{
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