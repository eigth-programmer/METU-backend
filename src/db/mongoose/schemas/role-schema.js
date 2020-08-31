const mongoose = require('../moongose');

const roleSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: {type: String, required: true},
});

module.exports = mongoose.model('Role', roleSchema);