module.exports = class User {
    constructor(id, nickName, password, role, email) {
        this.id = id;
        this.nickName = nickName;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}