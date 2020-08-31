export function UpdateUser(id, nickName, password, role, email, {userRepository}){
    return userRepository.update(id, nickName, password, role);
}