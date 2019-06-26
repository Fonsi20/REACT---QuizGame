const initialState = {
    cont: 1,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state.cont + 1;
        default:
            return initialState;
    }
}
