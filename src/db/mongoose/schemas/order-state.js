const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderStateSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    name: {type: String}
});

module.exports = mongoose.model('OrderState', orderStateSchema);