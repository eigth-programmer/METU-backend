import {CreateUser} from "../application/create-user";
import {UpdateUser} from "../application/update-user";
import {DeleteUser} from "../application/delete-user";
import {GetUser} from "../application/get-user";
import {ListUser} from "../application/list-user";
import {GetUserByEmail} from "../application/get-user-by-email";

export class UserController{
    async createUser(req){
        const context = {};
        const {nickName, password, role, email} = req.body;
        return await CreateUser(null, nickName, password, role, email, context);
    }

    async updateUser(req) {
        const context = {};
        const { id, nickName, password, role, email } = req.body;
        return await UpdateUser(id, nickName, password, role, email, context);
    }

    async delete(req) {
        const context = {};
        const { id } = req.body;
        return await DeleteUser(id, context);
    }

    async get(req) {
        const context = {};
        const { id } = req.body;
        return await GetUser(id, context);
    }

    async list() {
        const context = {};
        return await ListUser(context);
    }

    async getUserByEmail(req){
        const context = {};
        const { email } = req.body;
        return await GetUserByEmail(email, context);
    }
}