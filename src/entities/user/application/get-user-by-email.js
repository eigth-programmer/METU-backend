module.exports = function GetUserByEmail(email, {userRepository}){
    return userRepository.get(email);
}