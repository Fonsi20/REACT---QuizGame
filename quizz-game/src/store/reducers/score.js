
import { initialState } from '../initialState';

export const SET_COUNTER_TRUE = 'SET_COUNTER_TRUE';
export const SET_COUNTER_FALSE = 'SET_COUNTER_FALSE';

export default function score(state = initialState.score, action) {
    console.log(action.type);
    switch (action.type) {
        case SET_COUNTER_TRUE:
            return {
                ...state,
                contTrue: action.payload.valueTrue
            };
        case SET_COUNTER_FALSE:
            return {
                ...state,
                contFalse: action.payload.valueFalse
            };
        default:
            console.log("ERROR - ENTRA EN UN DEFAULT")
            return initialState.score
    }
}
