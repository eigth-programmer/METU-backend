const MongoUser = require('../../../db/mongoose/schemas/user-schema');
const {User} = require("../domain/user");
const {UserRepository} = require("../domain/user-repository");

class UserMongoRepository extends UserRepository{
    async create(user) {
        const newUser = new MongoUser(user);
        const {id, email, password, role, created} = await newUser.save();
        return new User(id, email, password, role, created);
    }

    async update(user) {
        const {id, email, password, role, created} = await MongoUser.findByIdAndUpdate(user.id, {
            email: user.email,
            password: user.password,
            role: user.role
        });

        return new User(id, email, password, role, created);
    }

    async delete(id) {
        return MongoUser.findOneAndDelete(id);
    }

    async getByEmail(email) {
        let retUser = null;
        const user = await MongoUser.find({ email: email });
        if(user.length > 0) retUser = new User(
            user[0].id,
            user[0].email,
            user[0].password,
            user[0].role,
            user[0].created);
        return retUser;
    }
}

module.exports = {UserMongoRepository: UserMongoRepository}
