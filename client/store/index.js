
import {createStore} from 'redux';
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'

export default function configureStore () {
    
    /**
     * Creating store
     */
    
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
}
