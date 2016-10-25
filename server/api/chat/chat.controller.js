

'use strict';

var ChatService = require('./chat.service');

/**
 *Save Chat
 */
exports.addNewMessage = (req, res) => {
    ChatService.addNewMessage(req.body)
        .on(Constants.events.DONE, (chat) => {
            return res.status(200).json(chat);
        })
        .on(Constants.events.ERROR, (err) => {
            console.log(err);
        })
};


/**
 * Get all courses
 */

exports.getAllMessages = function (req, res) {
    ChatService.getAllMessages()
        .on(Constants.events.ERROR, (err) => {
          console.log(err)
        })
        .on(Constants.events.DONE, (chat) => {
            return res.status(200).json(chat);
        })
};

