
import { ADD_USER } from "../Constants/ActionTypes";


const initialState = {
    users: [],

};

export default function (state = initialState, action) {
    if (action.type === ADD_USER) {
        return Object.assign({}, state, {
            users: state.users.concat(action.payload)
        });
    }
    return state;
}
