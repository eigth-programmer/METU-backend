const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderStateSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    name: {type: String, unique: true, required: true}
});

module.exports = mongoose.model('OrderState', orderStateSchema);
