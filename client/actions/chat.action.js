

import {MESSAGE_RECEIVED, MESSAGES_LOADED, TYPING, STOP_TYPING} from '../constants';
import axios from 'axios';
import {socket} from '../socket';

/**
 * Trigger to load all messages
 */

export function loadMessages() {
    return (dispatch) => {
        axios({
            method: 'get',
            url: '/api/chat'
        }).then((response) => {
            dispatch(messagesLoaded(response.data));
        })
    }
}

/**
 * Trigger when all messages are loaded
 */

export function messagesLoaded (messages) {
    return {
        type : MESSAGES_LOADED,
        state : {
            messages : messages
        }
    }
}

/**
 * Triggered while sending a message
 */

export function sendMessage(message, user) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: '/api/chat',
            data : {
                text : message,
                from : user,
                time : new Date()
            }
        }).then((response) => {
            //to something
        }).catch((err) => {
            dispatch(messageReceived({text : message, from : user, time : new Date()}))
        })
    }
}

/**
 * Trigger when message is received
 */

export function messageReceived (message) {
    return {
        type: MESSAGE_RECEIVED,
        message
    }
}

/**
 * Trigger when user is typing
 */

export function typing (userName) {
    return {
        type: TYPING,
        userName
    }
}

/**
 * Trigger when user stops typing
 */

export function stopTyping (user) {
    return {
        type: STOP_TYPING,
        user
    }
}









