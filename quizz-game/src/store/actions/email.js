
import {SET_EMAIL} from "../reducers/email";


export const setEmailAction = (value) => {
    return {
        type: SET_EMAIL,
        payload: {
            value
        }
    }
};
