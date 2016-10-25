

import axios from 'axios';
import {browserHistory} from 'react-router';
import {loadMessages} from './chat.action';
import {CREATE_USER} from '../constants';


/**
 * User login
 */

export function login(userName) {
    return (dispatch) => {
        dispatch(createUser(userName))
        browserHistory.push({
            pathname: '/home'
        });
    };
}


/*
*
* create a new user in state
* */

export function createUser(userName) {
    return {
        type : CREATE_USER,
        userName
    }
}