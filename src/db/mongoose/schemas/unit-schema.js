const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    name: {type: String, required: true, unique: false},
    symbol: {type: String, required: true, unique: false}
});

unitSchema.index({name: 1, symbol: 1},{unique:true});

module.exports = mongoose.model('Unit', unitSchema);