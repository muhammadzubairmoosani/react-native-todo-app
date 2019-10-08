import Action from '../action/action';
import firebase from '../../config/firebase';

var todos = [];
export default class Middleware {
    static addToDatabase(data) {
        return dispatch => {
            todos.push(data);
            firebase.database().ref('todos').set(todos)
            firebase
                .database()
                .ref('todos')
                .once('value', data =>
                    dispatch(Action.newItem(data.val()))
                )
        }
    }
    static deleteItem(data) {
        return dispatch => {
            let arr = todos;
            arr.splice(data, 1);
            todos = arr;
            firebase.database().ref('todos').set(todos);
            dispatch(Action.deteleItem(todos));
        }
    }
    static clearList() {
        return dispatch => {
            todos = [];
            firebase.database().ref('todos').set(todos);
            dispatch(Action.clearList(todos));
        }
    }
}
