

export const scoreSelector = state => state.score;

export const trueSelector = state => scoreSelector(state).countTrue;
export const falseSelector = state => scoreSelector(state).countFalse;
