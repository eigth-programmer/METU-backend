const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taxSchema = new Schema({
    _id: Schema.ObjectId,
    name: {type: String, required: true},
    amount: {type: Number, required: true}
});

module.exports = mongoose.model('Tax', taxSchema);