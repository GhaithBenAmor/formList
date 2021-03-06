import { ADD_USER } from "../Constants/ActionTypes";
export function addUser(data) {
    return (dispatch) => {
        dispatch({ type: ADD_USER, payload: data });
    };
}
