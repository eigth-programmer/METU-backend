import {UserRepository} from "../domain/user-repository";
import {User} from "../domain/user";

const MongooseUser = require('../../db/mongoose/schemas/user-schema')

export class UserMongoRepository extends UserRepository {
    async create(user) {
        const mongooseUser = new MongooseUser(user);
        await mongooseUser.save();
        return new User(mongooseUser.id,
            mongooseUser.nickName,
            mongooseUser.password,
            mongooseUser.role);
    }

    async update(user) {
        const { id, nickName, password, role } = user;
        const mongooseUser = MongooseUser
            .findByIdAndUpdate(id, { nickName, password, role });
        return new User(mongooseUser.id,
            mongooseUser.nickName,
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
            mongooseUser.password,
            mongooseUser.role);
    }

    async list() {
        const mongooseUsers = await MongooseUser.find();
        return mongooseUsers.map((mongooseUser) => {
            return new User(mongooseUser.id,
                mongooseUser.nickName,
                mongooseUser.password,
                mongooseUser.role);
        });
    }
}