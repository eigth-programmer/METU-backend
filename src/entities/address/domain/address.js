class Address {
    constructor(id, street, portal, floor, door, city, postCode, country, client, type) {
        this.id = id;
        this.street = street;
        this.portal = portal;
        this.floor = floor;
        this.door = door;
        this.city = city;
        this.postCode = postCode;
        this.country = country;
        this.client = client;
        this.type = type;
    }
}

module.exports = { Address: Address}
