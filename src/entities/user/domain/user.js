class User {
    constructor(email, password, role, created) {
        this.email = email;
        this.password = password;
        this.role = role;
        this.created = created;
    }
}

module.exports = { User: User}