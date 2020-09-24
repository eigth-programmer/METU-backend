const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    user: {type: Schema.ObjectId, ref:'User', unique: false, required: true},
    product: {type: Schema.ObjectId, ref:'Product', unique: false, required: true},
    created: {type: Date, default: Date.now()},
    rating:{type: Number, required: true, min: 1, max:5},
    title: {type: String},
    comment: {type: String}
});

reviewSchema.index({user: 1, product: 1}, {unique: true})

module.exports = mongoose.model('Review', reviewSchema);
