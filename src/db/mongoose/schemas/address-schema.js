const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    street: String,
    portal: Number,
    floor: Number,
    door: String,
    city: String,
    post_code: Number,
    country: String,
    client: {type: Schema.ObjectId, ref: 'Client'},
    type: {type: Schema.ObjectId, ref: 'StreetType'}
});

module.exports = mongoose.model('Address', addressSchema);