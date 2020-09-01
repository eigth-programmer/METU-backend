module.exports = function GetRole(id, {roleRepository}){
    return roleRepository.get(id);
}