const MongoUser = require('../../../db/mongoose/schemas/user-schema');
const {UserRepository} = require("./user-repository");
const {mapTo} = require('./user-mapper');

class UserMongoRepository extends UserRepository{
    async create(user) {
        const newUser = new MongoUser(user);

        return mapTo(await newUser.save());
    }

    async update(user) {
        const update = {
            email: user.email,
            password: user.password,
            role: user.role
        }

        return mapTo(await MongoUser.findByIdAndUpdate(user.id, update, {new: true}));
    }

    async delete(id) {
        return MongoUser.findOneAndDelete(id);
    }

    async getByEmail(email) {
        let retUser = null;
        const user = await MongoUser.find({ email: email });
        if(user.length > 0) retUser = mapTo(user[0]);
        return retUser;
    }
}

module.exports = {UserMongoRepository: UserMongoRepository}
