module.exports = function ListUser({userRepository}){
    return userRepository.list();
}