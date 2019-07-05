import {SET_COUNTER_TRUE} from "../reducers/score";
import {SET_COUNTER_FALSE} from "../reducers/score";


export const setCounterTrueAction = (valueTrue) => {
    return {
        type: SET_COUNTER_TRUE,
        payload: {
            valueTrue
        }
    }
};

export const setCounterFalseAction = (valueFalse) => {
    return { 
        type: SET_COUNTER_FALSE,
        payload: {
            valueFalse
        }
    }
};