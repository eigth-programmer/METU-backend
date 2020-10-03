const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    name: {type: String, required: true, unique: true},
});

module.exports = mongoose.model('Brand', brandSchema);
