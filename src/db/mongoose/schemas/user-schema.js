const mongoose = require('../moongose');

const userSchema = new mongoose.Schema({
    nickName: String,
    email: String,
    password: String,
    create: {type: Date, default: Date.now()},
    role: {type: Schema.Types.ObjectId, ref: 'Role'}
});

module.exports = mongoose.model('User', userSchema);