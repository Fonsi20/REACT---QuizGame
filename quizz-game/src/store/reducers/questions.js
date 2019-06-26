
import {initialState} from "../initialState";


export const QUESTION = 'QUESTION';

export default function score(state = initialState.questions, action) {
    switch (action.type) {
        case QUESTION:
            return action.payload.questions;
        default:
            return initialState.questions
    }
}

