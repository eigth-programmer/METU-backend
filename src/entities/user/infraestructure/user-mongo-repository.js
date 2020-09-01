const { UserRepository } = require("../domain/user-repository");
const { User } = require("../domain/user");

const MongooseUser = require('../../../db/mongoose/schemas/user-schema')

export class UserMongoRepository extends UserRepository {
    async create(user) {
        const mongooseUser = new MongooseUser(user);
        await mongooseUser.save();
        return new User(mongooseUser.id,
            mongooseUser.nickName,
            mongooseUser.email,
            mongooseUser.password,
            mongooseUser.role);
    }

    async update(user) {
        const { id, nickName, email, password, role } = user;
        const mongooseUser = MongooseUser
            .findByIdAndUpdate(id, { nickName, email, password, role });
        return new User(mongooseUser.id,
            mongooseUser.nickName,
            mongooseUser.email,
            mongooseUser.password,
            mongooseUser.role);
    }

    async delete(userId) {
        return MongooseUser.findOneAndDelete(userId);
    }

    async get(userId) {
        const mongooseUser = await MongooseUser.findById(userId);
        return new User(mongooseUser.id,
            mongooseUser.nickName,
            mongooseUser.email,
            mongooseUser.password,
            mongooseUser.role);
    }

    async list() {
        const mongooseUsers = await MongooseUser.find();
        return mongooseUsers.map((mongooseUser) => {
            return new User(mongooseUser.id,
                mongooseUser.nickName,
                mongooseUser.email,
                mongooseUser.password,
                mongooseUser.role);
        });
    }

    async getUserByEmail(email){
        const mongooseUsers = await MongooseUser.findOne({email: email});
        return mongooseUsers.map((mongooseUser) => {
            return new User(mongooseUser.id,
                mongooseUser.nickName,
                mongooseUser.email,
                mongooseUser.password,
                mongooseUser.role);
        });
    }
}