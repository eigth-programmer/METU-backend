const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discountSchema = new Schema({
    _id: Schema.ObjectId,
    name: {type: String},
    validity: {type: Date},
    amount: {type: String},
    description:{type: String},
});

module.exports = mongoose.model('Discount', discountSchema);