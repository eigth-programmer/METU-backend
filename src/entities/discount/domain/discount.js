class Discount {
    constructor(name, validity, amount, discount) {
        this.name = name;
        this.validity = validity;
        this.amount = amount;
        this.discount = discount;
    }
}

module.exports = { Discount: Discount}