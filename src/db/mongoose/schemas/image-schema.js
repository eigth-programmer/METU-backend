const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    _id: Schema.ObjectId,
    path: {type: String, required: true}
});

module.exports = mongoose.model('Image', imageSchema);