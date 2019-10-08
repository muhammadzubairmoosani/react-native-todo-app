import Action from '../action/action';
import firebase from '../../config/firebase';

var todos = [];
export default class Middleware {
    static addToDatabase(data) {
        return () => {
            todos.push(data);
            firebase.database().ref('todos').set(todos)
            this.getDataFromDatabase();
        }
    }
    static deleteItem(data) {
        return () => {
            let arr = todos;
            arr.splice(data, 1);
            todos = arr;
            firebase.database().ref('todos').set(todos);
            firebase.database.ref('todos').on('value', data => {
                console.warn(data)

            })
            // .then(snapshot => console.warn(snapshot))
            // .catch(err => console.warn(err))
        }
    }
    static clearList() {
        return () => {
            todos = [];
            firebase.database().ref('todos').set(todos)
            this.getDataFromDatabase()
            // .then(value => dispatch(Action.clearList(value)))
            // .catch(err => console.warn(err));
        }
    }
    static getDataFromDatabase() {
        //     return dispatch => {

        //     }
    }
}

// dispatch(Action.newItem(value.val())