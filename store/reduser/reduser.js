import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
    NEW_ITEM,
    DELETE_ITEM,
    CLEAR_LIST
} from '../constants';

function reducer(state = [], action) {
    switch (action.type) {
        case NEW_ITEM:
        case DELETE_ITEM:
        case CLEAR_LIST:
            return action.payload;
        default:
            return state;
    }
}
const store = createStore(reducer, applyMiddleware(thunk));

export default store;