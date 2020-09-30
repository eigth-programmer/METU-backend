const {Address} = require("../domain/address");

const mapTo = (dbAddress) => {
    const {id,
        street,
        portal,
        floor,
        door,
        city,
        postCode,
        country,
        client,
        type} = dbAddress;

    return new Address(id,
        street,
        portal,
        floor,
        door,
        city,
        postCode,
        country,
        client,
        type);
}

module.exports = {mapTo: mapTo}
