const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {type: String, required: true},
    created: {type: Date, default: Date.now()},
    role: {type: Schema.ObjectId, ref: 'Role'},
    discounts: [{type: Schema.ObjectId, ref: 'Discount'}]
});

module.exports = mongoose.model('User', userSchema);