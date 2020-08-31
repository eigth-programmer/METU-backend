export function GetRole(id, {roleRepository}){
    return roleRepository.get(id);
}