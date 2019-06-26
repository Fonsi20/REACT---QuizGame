const initialState = {
    conttrue: 0,
    contfalse: 0,
};

export default function score(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENTTRUE':
            return state.conttrue + 1;
        case 'INCREMENTFALSE':
            return state.contfalse + 1;
      default:
        return initialState
    }
  }