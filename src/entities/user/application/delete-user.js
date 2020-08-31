export function DeleteUser(id, {userRepository}){
    return userRepository.delete(id);
}