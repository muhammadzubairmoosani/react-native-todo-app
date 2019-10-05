import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import thunk from ''

var firebaseConfig = {
    apiKey: "AIzaSyC2_BS8LnF16Vou0ny3uLyy00aVzcq7usw",
    databaseURL: "https://database-demo-94c6a.firebaseio.com",
    projectId: "database-demo-94c6a",
    appId: "1:417622674892:web:1d8fed13b07f7e887ba169",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

addToDatabase = todos => firebase.database().ref('todos').set(todos);

const todos = [];
function reducer(state = todos, action) {
    switch (action.type) {
        case 'SEND_TO_DATABASE':
            todos.push(action.payload);
            addToDatabase(todos);
            return '';
            break;
        case 'CLEAR_LIST':
            todos = [];
            addToDatabase(todos)
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;