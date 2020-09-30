const {Review} = require("../domain/review");

const mapTo = (dbReview) => {
    const {id, user, product, created, rating, title, comment} = dbReview;

    return new Review(id, user, product, created, rating, title, comment);
}

module.exports = {mapTo: mapTo}
