const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taxSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    name: {type: String, required: true},
    amount: {type: Number, required: true}
});

module.exports = mongoose.model('Tax', taxSchema);