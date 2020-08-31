import {User} from "../domain/user";

export function CreateUser(id, nickName, password, role, {userRepository}){
    const user = new User(id, nickName, password, role);
    return userRepository.create(user);
}