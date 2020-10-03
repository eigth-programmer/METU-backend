const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    name: {type: String, required: true}
});

module.exports = mongoose.model('Role', roleSchema);