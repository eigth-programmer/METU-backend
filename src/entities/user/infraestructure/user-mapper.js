const {User} = require("../domain/user");

const mapTo = (dbUser) => {
    const {id, email, password, role, created} = dbUser;

    return new User(id, email, password, role, created);
}

module.exports = {mapTo: mapTo}
