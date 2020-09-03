const MongoUser = require('../../../db/mongoose/schemas/user-schema');
const {User} = require("../domain/user");
const {UserRepository} = require("../domain/user-repository");

class UserMongoRepository extends UserRepository{
    async create(user) {
        const newUser = new MongoUser(user);
        await newUser.save();
        return new User(newUser.email, newUser.password, newUser.role, newUser.created);
    }

    async update(user) {
        const updateUser = new MongoUser(user);
        await updateUser.findByIdAndUpdate(user.id, user);
    }

    async delete(id) {
        return MongoUser.findOneAndDelete(id);
    }

    async get(id) {
        const user = await MongoUser.findById(id);
        return new User(user.email, user.password, user.role, user.created);
    }

    async getByEmail(email) {
        const user = await MongoUser.find({ email: email });
        return new User(user.email, user.password, user.role, user.created);
    }
}

module.exports = {UserMongoRepository: UserMongoRepository}