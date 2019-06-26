
import {SET_COUNTER} from "../reducers/counter";


export const setCounterAction = (value) => {
    return {
        type: SET_COUNTER,
        payload: {
            value
        }
    }
};
