
import {initialState} from '../initialState';


export default function score(state = initialState.score, action) {
    switch (action.type) {
        case 'INCREMENTTRUE':
            return {
                ...state,
                conttrue: state.contTrue + 1
            };
        case 'INCREMENTFALSE':
            return {
                ...state,
                contFalse: state.contFalse + 1
            };
      default:
        return initialState.score
    }
  }
