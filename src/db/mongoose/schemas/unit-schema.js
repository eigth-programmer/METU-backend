const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    name: {type: String, required: true, unique: true}
});

module.exports = mongoose.model('Category', unitSchema);