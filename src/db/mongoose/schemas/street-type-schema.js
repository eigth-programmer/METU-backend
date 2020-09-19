const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const streetTypeSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    name: {type: String, required: true, unique: true}
});

module.exports = mongoose.model('StreetType', streetTypeSchema);