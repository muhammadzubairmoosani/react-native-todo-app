import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import firebase from '../config/firebase';

export const addToDatabase = todos => {
    firebase.database().ref('todos').set(todos);
    firebase.database().ref('todos').once('value', data => todos = data.val())
}

let todos = [];
function reducer(state = todos, action) {
    switch (action.type) {
        case 'SEND_TO_DATABASE':
            todos.push(action.payload);
            return state;
        case 'CLEAR_LIST':
            todos = [];
            addToDatabase(state)
            return state;
        case 'DELETE':
            let arr = todos;
            arr.splice(action.payload, 1);
            todos = arr;
            addToDatabase(state)
            return state;

        default:
            return state;
    }
}
const store = createStore(reducer, applyMiddleware(thunk));

export default store;