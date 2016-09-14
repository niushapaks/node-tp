//Category
var mongoose = require('mongoose');

var category = new mongoose.Schema({
    name: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Category', category);