class Order {
    constructor(user, comment, state, discounts, lines) {
        this.user = user;
        this.comment = comment;
        this.state = state;
        this.discounts = discounts;
        this.lines = lines;
    }
}

module.exports = {Order: Order}