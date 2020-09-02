const mongoose = require('mongoose');

const streetTypeSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model('StreetType', streetTypeSchema);