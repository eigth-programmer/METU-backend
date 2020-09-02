const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderStateSchema = new Schema({
    _id: Schema.ObjectId,
    name: {type: String}
});

module.exports = mongoose.model('OrderLine', orderStateSchema);