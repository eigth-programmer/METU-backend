const mongoose = require('../moongose');

const streetTypeSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model('StreetType', streetTypeSchema);