import Action from '../action/action';
import firebase from '../../config/firebase';

let todos = [];
export default class Middleware {
    static addToDatabase(data) {
        return dispatch => {
            todos.push(data);
            firebase.database().ref('todos').set(todos)
                .then(() => {
                    firebase.database().ref('todos').on('value', data => {
                        dispatch(Action.newItem(data.val()))
                    })
                })
                .catch(err => console.warn(err))
        }
    }
    static deleteItem(data) {
        return dispatch => {
            let arr = todos;
            arr.splice(data, 1);
            todos = arr;
            firebase.database().ref('todos').set(todos)
                .then(() => {
                    firebase.database().ref('todos').on('value', data => {
                        dispatch(Action.deteleItem(data.val()))
                    })
                })
                .catch(err => console.warn(err))
        }
    }
    static clearList() {
        return dispatch => {
            todos = [];
            firebase.database().ref('todos').set(todos)
                .then(() => {
                    firebase.database().ref('todos').on('value', data => {
                        dispatch(Action.clearList(data.val()))
                    })
                })
                .catch(err => console.warn(err))
        }
    }
}