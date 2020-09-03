const createUser = require('../application/create-user');
const updateUser = require('../application/update-user');
const deleteUser = require('../application/delete-user');
const getUserByEmail = require('../application/get-user-by-email');
const getUser = require('../application/get-user');
const {UserMongoRepository} = require("./user-mongo-repository");
const repository = new UserMongoRepository();

class UserController {
    async create(user){
        return await createUser(user, repository);
    }

    async update(user){
        return await updateUser(user, repository);
    }

    async delete(id) {
        return await deleteUser(id, repository);
    }

    async get(id){
        return await getUser(id, repository);
    }

    async getByEmail(email){
        return await getUserByEmail(email, repository);
    }
}

module.exports = {UserController: UserController}