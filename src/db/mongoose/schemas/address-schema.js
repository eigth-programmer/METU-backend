const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: String,
    portal: Number,
    floor: Number,
    door: String,
    city: String,
    post_code: Number,
    country: String,
    client: {type: Schema.Types.ObjectId, ref: 'Client'},
    type: {type: Schema.Types.ObjectId, ref: 'StreetType'}
});

module.exports = mongoose.model('Address', addressSchema);