import {MESSAGE_RECEIVED, MESSAGES_LOADED, TYPING, STOP_TYPING} from '../constants';

let initialState = {
    messages : [{
        from : {
            name : '',
            id : ''
        },
        text : '',
        time : ''
    }],
    typingBy : '',
    loading : true
};

export default function message(state = initialState, action) {

    switch (action.type) {

        case MESSAGES_LOADED :
            return Object.assign({}, state, {messages: [...action.state.messages], loading: false});

        case MESSAGE_RECEIVED:
            return Object.assign({}, state, {messages: [...state.messages, action.message], loading: false});

        case TYPING :
            return Object.assign({}, state, {typingBy: action.userName});

        case STOP_TYPING :
            if(state.typingBy.id == action.user.id){
                return Object.assign({}, state, {typingBy: ''});
            }else{
                console.log('meh', action)
                return state;
            }
        
        default :
            return state
    }

}

