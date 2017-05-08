

const dealerReducer = (state = {
    name: 'Super Shoppie',
    numberOfProducts: 500,
}, action) => {

    switch (action.type) {
        case 'SET_NAME':
            state = {
                ...state,
                name: state.name + action.value,
            };
            break;
        case 'INCREASE_PRODUCTS':
            state = {
                ...state,
                numberOfProducts: state.numberOfProducts + action.value,
            };
            break;
        case 'DECREASE_PRODUCTS':
            state = {
                    ...state,
                    numberOfProducts: state.numberOfProducts + action.value,
                };
            break;
    }
    return state;
};


export default dealerReducer;