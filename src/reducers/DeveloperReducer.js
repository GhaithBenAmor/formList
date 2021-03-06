
import { ADD_DEVELOPER } from "../Constants/ActionTypes";


const initialState = {
    developers: [],

};

export default function (state = initialState, action) {
    if (action.type === ADD_DEVELOPER) {
        return Object.assign({}, state, {
            developers: state.developers.concat(action.payload)
        });
    }
    return state;
}
