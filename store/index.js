import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import firebase from '..config/firebase.js';

addToDatabase = todos => firebase.database().ref('todos').set(todos);

let todos = [];
function reducer(state = todos, action) {
    switch (action.type) {
        case 'SEND_TO_DATABASE':
            todos.push(action.payload);
            addToDatabase(todos);
            return '';
        case 'CLEAR_LIST':
            todos = [];
            addToDatabase(todos)
            return state
        default:
            return state;
    }
}
const store = createStore(reducer, applyMiddleware(thunk));

export default store;