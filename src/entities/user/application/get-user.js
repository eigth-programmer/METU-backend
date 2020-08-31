export function GetUser(id, {userRepository}){
    return userRepository.get(id);
}