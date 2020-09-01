const {User} = require("../domain/user");

module.exports = function CreateUser(id, nickName, password, role, email, {userRepository}){
    const user = new User(id, nickName, email, password, role);
    return userRepository.create(user);
}