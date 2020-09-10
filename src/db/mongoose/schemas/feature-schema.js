const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const featureSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    name: {type: String, required: true, unique: true},
    unit: {type: Schema.ObjectId, ref: 'Unit'}
});

module.exports = mongoose.model('Feature', featureSchema);