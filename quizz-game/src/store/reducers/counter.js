
import {initialState} from '../initialState';

export const SET_COUNTER = 'SET_COUNTER';


export default function counter (state = initialState.counter, action) {
    switch (action.type) {
        case SET_COUNTER:
            console.log(state, action)
            return {
                value: action.payload.value
            };
        default:
            return initialState.counter;
    }
}
