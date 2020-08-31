import {UserRepository} from "../domain/user-repository";
import {User} from "../domain/user";

export function CreateUser(id, nickName, password, role){
    const user = new User(id, nickName, password, role);
    return UserRepository.create(user);
}