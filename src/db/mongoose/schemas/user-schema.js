const mongoose = require('../moongose');

const userSchema = new mongoose.Schema({
    nickName: String,
    password: String,
    role: {type: Schema.Types.ObjectId, ref: 'Role'}
});

module.exports = mongoose.model('User', userSchema);