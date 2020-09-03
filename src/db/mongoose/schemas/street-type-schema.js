const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const streetTypeSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    name: String,
});

module.exports = mongoose.model('StreetType', streetTypeSchema);