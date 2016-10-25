
export const socket = io.connect('http://localhost:9000');
import * as chatAction from './actions/chat.action';

export function register(dispatch) {
    socket.on('typing', user => {
            dispatch(chatAction.typing(user));
        }
    );
    socket.on('stop:typing', user => {
            dispatch(chatAction.stopTyping(user));
        }
    );
    socket.on('chat', (data) => {
        dispatch(chatAction.messageReceived(data));
    });
}