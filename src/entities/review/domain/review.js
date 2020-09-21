class Review {
    constructor(id, user, product, created, rating, title, comment) {
        this.id = id;
        this.user = user;
        this.product = product;
        this.created = created;
        this.rating = rating;
        this.title = title;
        this.comment = comment;
    }
}

module.exports = { Review: Review}