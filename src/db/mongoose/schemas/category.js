const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    _id: Schema.ObjectId,
    name: {type: String, required: true}
});

module.exports = mongoose.model('Category', categorySchema);