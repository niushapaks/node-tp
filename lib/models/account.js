//Account

var mongoose = require('mongoose');

var account = new mongoose.Schema({
    username: String,
    password: String,
    createdAt: {type: Date, default: Date.now},
    updateddAt: {type: Date, default: Date.now}
});

//Rajouter des méthodes utilitaires ? (exemple : vérifier son mot de passe)

module.exports = mongoose.model('Account', account);