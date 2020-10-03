const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const featureSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    name: {type: String, required: true, unique: false},
    unit: {type: Schema.ObjectId, ref: 'Unit', unique: false, required: true}
});

featureSchema.index({name: 1, unit: 1}, {unique: true})

module.exports = mongoose.model('Feature', featureSchema);
