var socketIO = require('socket.io');
var MessageModel = require('../models/message');

module.exports = function(server){
    var messagesMemory = [];
    MessageModel.find(function(err, messages){
        if(err){
            console.error(err);
        }else{
            console.log(messages);
            messagesMemory.push(messages);
        }
    });
    var io = socketIO(server);
    io.on('connection', function(socket){
        socket.emit('all messages', messagesMemory);
        socket.on('new message', function(messageDTO){
            messagesMemory.push(messageDTO);
            MessageModel.create(messageDTO, function(err, message){
                if(err){
                    console.error(err);
                }
            });
            socket.emit('all messages', messagesMemory);
        });
    });
};