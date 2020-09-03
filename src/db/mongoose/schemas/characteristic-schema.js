const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characteristicSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    name: {type: String, required: true},
    unit: {type: Schema.ObjectId, ref: 'Unit'}
});

module.exports = mongoose.model('Category', characteristicSchema);