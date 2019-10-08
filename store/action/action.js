import {
    NEW_ITEM,
    DELETE_ITEM,
    CLEAR_LIST
} from '../constants'

export default class Action {
    static newItem(data) {
        // console.warn(data)
        return {
            type: NEW_ITEM,
            payload: data
        }
    }
    static deteleItem(data) {
        return {
            type: DELETE_ITEM,
            payload: data
        }
    }
    static clearList(data) {
        return {
            type: CLEAR_LIST,
            payload: data
        }
    }

}