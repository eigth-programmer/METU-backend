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
        let retUser = null;
        const user = await MongoUser.findById(id);
        if(user.length > 0) retUser = new User(user[0].email,
            user[0].password,
            user[0].role,
            user[0].created);
        return retUser;
    }

    async getByEmail(email) {
        let retUser = null;
        const user = await MongoUser.find({ email: email });
        if(user.length > 0) retUser = new User(user[0].email,
            user[0].password,
            user[0].role,
            user[0].created);
        return retUser;
    }
}

module.exports = {UserMongoRepository: UserMongoRepository}