
//sync
/*export function increaseCost(increaseCostBy) {
    return {
        type: "INCREASE_COST",
        value: increaseCostBy
    };
}*/

//async - using thunk
/*export function increaseCost(increaseCostBy) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: "INCREASE_COST",
                value: increaseCostBy
            });
        }, 5000);
    };
}*/

//async - using promise
export function increaseCost(increaseCostBy) {
    return {
        type: "INCREASE_COST",
        value: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(increaseCostBy);
            }, 5000);
        })
    };
}

export function decreaseCost(decreaseCostBy) {
    return {
        type: "DECREASE_COST",
        value: decreaseCostBy
    };
}