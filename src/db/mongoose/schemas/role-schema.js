const mongoose = require('../moongose');

const roleSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model('Role', roleSchema);