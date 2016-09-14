//Product

var mongoose = require('mongoose');

var product = new mongoose.Schema({
    name: String,
    price: Number,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    description: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Product', product);