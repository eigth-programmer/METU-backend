const mongoose = require('../moongose');

const userSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    nickName: String,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {type: String, required: true},
    created: {type: Date, default: Date.now()},
    role: {type: Schema.Types.ObjectId, ref: 'Role'}
});

module.exports = mongoose.model('User', userSchema);