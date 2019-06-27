
import {initialState} from '../initialState';

export const SET_EMAIL = 'SET_EMAIL';

export default function counter (state = initialState.email, action) {
    switch (action.type) {
        case SET_EMAIL:
            console.log(state, action)
            return {
                value: action.payload.value
            };
        default:
            return initialState.email;
    }
}