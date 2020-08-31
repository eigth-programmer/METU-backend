export function GetUserByEmail(email, {userRepository}){
    return userRepository.get(email);
}