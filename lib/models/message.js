//Message
var mongoose = require('mongoose');

var message = new mongoose.Schema({
    user: {
        _id: String,
        username: String
    },
    content: String,
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Message', message);