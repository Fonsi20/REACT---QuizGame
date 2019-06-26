import {SET_COUNTER_TRUE} from "../reducers/score";
import {SET_COUNTER_FALSE} from "../reducers/score";


export const setCounterTrueAction = (value) => {
    return {
        type: SET_COUNTER_TRUE,
        payload: {
            value
        }
    }
};

export const setCounterFalseAction = (value) => {
    return {
        type: SET_COUNTER_FALSE,
        payload: {
            value
        }
    }
};