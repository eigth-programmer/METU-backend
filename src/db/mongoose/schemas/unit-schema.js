const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
    _id: Schema.ObjectId,
    name: {type: String, required: true}
});

module.exports = mongoose.model('Category', unitSchema);