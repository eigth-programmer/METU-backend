const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    street: {type: String, required: true},
    portal: {type: String, required: true},
    floor: {type: Number, unique: false},
    door: {type: String, unique: false},
    city: {type: String, unique: false},
    postCode: {type: Number, unique: false},
    country: {type: String},
    client: {type: Schema.ObjectId, ref: 'Client', unique: false},
    type: {type: Schema.ObjectId, ref: 'StreetType'}
});

addressSchema.index({street: 1, portal: 1, floor: 1, door: 1, city: 1, postCode: 1, client: 1}, {unique: true})

module.exports = mongoose.model('Address', addressSchema);