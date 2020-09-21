class User {
    constructor(id, email, password, role, created) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
        this.created = created;
    }
}

module.exports = { User: User}