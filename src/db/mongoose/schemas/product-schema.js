const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    brand: {type: String},
    description: {type: String},
    image: {type: Schema.ObjectId, ref: 'Image'},
    categories: [{type: Schema.ObjectId, ref: 'Category'}],
    taxes: [{type: Schema.ObjectId, ref: 'Tax'}],
    characterisctics: [{type: Schema.ObjectId, ref: 'Characteristic'}]
});

module.exports = mongoose.model('Product', productSchema);