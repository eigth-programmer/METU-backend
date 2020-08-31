/** Works as interface **/
export class UserRepository {
    create(user){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async update(user) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async delete(userId) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async get(userId) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async list() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
}