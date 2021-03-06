import { ADD_DEVELOPER } from "../Constants/ActionTypes";
export function addDeveloper(data) {
    return (dispatch) => {
        dispatch({ type: ADD_DEVELOPER, payload: data });
    };
}
