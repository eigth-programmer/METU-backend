const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const streetTypeSchema = new Schema({
    _id: Schema.ObjectId,
    name: String,
});

module.exports = mongoose.model('StreetType', streetTypeSchema);