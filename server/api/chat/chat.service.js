

'use strict';

var Chat = require('./chat.model');
var Socket;

/**
 *Save Message
 */


exports.addNewMessage = function (data) {
    let emmiter = this;
    Chat.create(data, function (err, chat) {
        if (err) {
            emmiter.emit(Constants.events.ERROR, err);
        }
        else {
            if(Socket){
                console.log("------ ", Socket.id)
                Socket.sockets.emit('chat', chat);
            }
            emmiter.emit(Constants.events.DONE, chat)
        }
    })

}.toEmitter();

exports.getAllMessages = function() {
    let emmiter = this;
    Chat.find({}, function (err, chat) {
        if (err) {
            emmiter.emit(Constants.events.ERROR, err);
        }
        else {
            emmiter.emit(Constants.events.DONE, chat);
        }
    })
}.toEmitter();

exports.registerSocket = function(socket){
    Socket = socket;
}


