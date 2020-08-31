import {CreateUser} from "../application/create-user";

export class UserController{
    async createUser(req){
        const {nickName, password, role} = req.body;
        const user = await CreateUser(null, nickName, password, role);
    }
}