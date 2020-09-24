const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    user: {type: Schema.ObjectId, ref: 'User'},
    comment: {type: String},
    state: {type: Schema.ObjectId, ref: 'OrderState', required: true},
    created: {type: Date, default: Date.now()},
    discounts:[{type: Schema.ObjectId, ref: 'Discount'}],
    lines: [{
        amount: Number,
        unit: {type: Schema.ObjectId, ref: 'Unit', required: true},
        product: {type: Schema.ObjectId, ref: 'Product', required: true}
    }],
    basePrice: {type: Number, required: true},
    taxesPrice: {type: Number, required: true},
    totalPrice: {type: Number, required: true},
    gifts: [{
        amount: Number,
        unit: {type: Schema.ObjectId, ref: 'Unit', required: true},
        product: {type: Schema.ObjectId, ref: 'Product'}
    }]
});

module.exports = mongoose.model('Order', orderSchema);
