const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    street: {type: String, required: true},
    portal: {type: String, required: true},
    floor: Number,
    door: String,
    city: String,
    postCode: Number,
    country: String,
    client: {type: Schema.ObjectId, ref: 'Client'},
    type: {type: Schema.ObjectId, ref: 'StreetType'}
});

module.exports = mongoose.model('Address', addressSchema);