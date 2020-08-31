const mongoose = require('../moongose');

const clientSchema = new mongoose.Schema({
    create: Date,
    email: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Client', clientSchema);