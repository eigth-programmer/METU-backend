const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discountSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    name: {type: String},
    validity: {type: Date},
    amount: {type: String, required: true},
    description:{type: String},
});

module.exports = mongoose.model('Discount', discountSchema);