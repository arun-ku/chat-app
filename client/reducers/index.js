import message from './message.reducer';
import user from './login.reducer';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    message,
    user
});

export default rootReducer;