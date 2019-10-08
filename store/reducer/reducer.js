import {
    NEW_ITEM,
    DELETE_ITEM,
    CLEAR_LIST
} from '../constants';

export default function reducer(state = [], action) {
    switch (action.type) {
        case NEW_ITEM:
        case DELETE_ITEM:
        case CLEAR_LIST:
            return action.payload;
        default:
            return state;
    }
}
