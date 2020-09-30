const {Role} = require("../domain/role");

const mapTo = (dbRole) => {
    const {id, name} = dbRole;

    return new Role(id, name);
}

module.exports = {mapTo: mapTo}
