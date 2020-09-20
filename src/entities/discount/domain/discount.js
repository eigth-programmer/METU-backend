class Discount {
    constructor(id, name, validity, amount, description) {
        this.id = id;
        this.name = name;
        this.validity = validity;
        this.amount = amount;
        this.description = description;
    }
}

module.exports = { Discount: Discount}