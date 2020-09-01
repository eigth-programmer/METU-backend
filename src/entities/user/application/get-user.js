module.exports = function GetUser(id, {userRepository}){
    return userRepository.get(id);
}