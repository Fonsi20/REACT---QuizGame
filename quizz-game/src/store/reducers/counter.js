
import { initialState } from '../initialState';

export const SET_COUNTER = 'SET_COUNTER';

export default function counter(state = initialState.counter, action) {
    console.log(action.type)
    switch (action.type) {
        case SET_COUNTER:
            return {
                value: action.payload.value
            };
        default:
            console.log("ERROR - ENTRA EN UN DEFAULT")
            return initialState.counter;
    }
}
