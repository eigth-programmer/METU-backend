const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    _id: Schema.ObjectId,
    user: {type: Schema.ObjectId, ref:'User'},
    product: {type: Schema.ObjectId, ref:'Product'},
    created: {type: Date, default: Date.now()},
    rating:{type: Number, required: true, min: 1, max:5},
    title: {type: String},
    comment: {type: String}
});

module.exports = mongoose.model('Review', reviewSchema);