const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    name: {type: String, required: true, unique: true}
});

module.exports = mongoose.model('Category', categorySchema);