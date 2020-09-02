const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true}
});

module.exports = mongoose.model('Role', roleSchema);