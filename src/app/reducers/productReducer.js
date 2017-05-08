
const productReducer = (state = {
    name: 'Chair',
    cost: 1000,
}, action) => {

    switch(action.type){
        case 'INCREASE_COST_FULFILLED':
            state = {
                ...state,
                cost: state.cost + action.value,
            }
        break;
        case 'DECREASE_COST':
            state = {
                ...state,
                cost: state.cost - action.value,
            }
        break;
    }
    return state;
};


export default productReducer;