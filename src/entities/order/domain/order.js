class Order {
    constructor(id, user, comment, state, created, discounts, lines,
                basePrice, taxesPrice, totalPrice, gifts, rating, address) {

        this.id = id;
        this.user = user;
        this.comment = comment;
        this.state = state;
        this.created = created;
        this.discounts = discounts;
        this.lines = lines;
        this.basePrice = basePrice;
        this.taxesPrice = taxesPrice;
        this.totalPrice = totalPrice;
        this.gifts = gifts;
        this.rating = rating;
        this.address = address;

    }
}

module.exports = {Order: Order}
