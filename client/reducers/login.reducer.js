import { CREATE_USER } from '../constants';
import { socket } from '../socket';

let initialState = {
    name: '',
    id: ''
};

export default function message(state = initialState, action) {

    switch (action.type) {

        case CREATE_USER :
            return Object.assign({}, state,  {name: action.userName, id: socket.id});
        default :
            return state
    }

}
