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
}