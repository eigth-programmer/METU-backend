class Order {
    constructor(id, user, comment, state, created, discounts, lines) {
        this.id = id;
        this.user = user;
        this.comment = comment;
        this.state = state;
        this.created = created;
        this.discounts = discounts;
        this.lines = lines;
    }
}

module.exports = {Order: Order}