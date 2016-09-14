var express = require('express');
var app = express();
var api = require('./routes/api');
var account = require('./routes/account');
var viewsRoutes = require('./routes/views');
var mongoose = require('mongoose');
var http = require('http');
var chat = require('./chat/chat');

try{
    //Middleware de gestion des erreurs
    app.use(function(err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });

    mongoose.connect('mongodb://localhost/test');

    //Middleware fichiers statiques
    app.use(express.static('public'));

    //Routeur API
    app.use('/api', api);

    //Routeur Accounts
    app.use('/account', account);

    //Moteur de template
    app.set('view engine', 'jade');
    app.set('views', __dirname + '/views');
    app.use('/', viewsRoutes);

    //app.listen(3000); : commenté car géré par http.Server() en dessous
    
    //Socket
    var server = http.Server(app);
    chat(server);

    server.listen(3000, function(){
        console.log('go !');
    });

} catch(e){
    console.log(e);
    process.kill();
}


