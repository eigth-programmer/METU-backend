export function UpdateUser(id, nickName, password, role, {userRepository}){
    return userRepository.update(id, nickName, password, role);
}