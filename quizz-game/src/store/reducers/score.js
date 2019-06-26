
import {initialState} from '../initialState';

export const SET_COUNTER_TRUE = 'SET_COUNTER_TRUE';
export const SET_COUNTER_FALSE = 'SET_COUNTER_FALSE';

export default function score(state = initialState.score, action) {
    switch (action.type) {
        case SET_COUNTER_TRUE:
            return {
                ...state,
                conttrue: state.contTrue + 1
            };
        case SET_COUNTER_FALSE:
            return {
                ...state,
                contFalse: state.contFalse + 1
            };
      default:
        return initialState.score
    }
  }
