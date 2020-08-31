import {CreateUser} from "../application/create-user";
import {UpdateUser} from "../application/update-user";
import {DeleteUser} from "../application/delete-user";
import {GetUser} from "../application/get-user";
import {ListUser} from "../application/list-user";

//@TODO add repository routing

export class UserController{
    async createUser(req, res){
        const context = {};
        const {nickName, password, role} = req.body;
        const user = await CreateUser(null, nickName, password, role, context);
    }

    async updateUser(req, res) {
        const context = {};
        const { id, nickName, password, role } = req.body;
        const user = await UpdateUser(id, nickName, password, role, context);
    }

    async delete(req, res) {
        const context = {};
        const { id } = req.body;
        const user = await DeleteUser(id, context);
    }

    async get(req, res) {
        const context = {};
        const { id } = req.body;
        const user = await GetUser(id, context);
    }

    async list(req, res) {
        const context = {};
        const users = await ListUser(context);
    }
}