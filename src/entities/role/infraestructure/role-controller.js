import {GetRole} from "../application/get-role";

export class RoleController {
    async get(id){
        const context = {};
        return await GetRole(id, context);
    }
}