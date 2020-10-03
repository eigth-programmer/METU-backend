const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    brand: [{type: Schema.ObjectId, ref: 'Brand'}],
    description: {type: String},
    images: [{path: String}],
    categories: [{type: Schema.ObjectId, ref: 'Category'}],
    taxes: [{type: Schema.ObjectId, ref: 'Tax'}],
    features: [{type: Schema.ObjectId, ref: 'Characteristic'}],
    discounts: [{type: Schema.ObjectId, ref: 'Discount'}],
    stock: {type: Number, required: true}
});

module.exports = mongoose.model('Product', productSchema);
