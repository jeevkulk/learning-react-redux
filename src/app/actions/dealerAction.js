
export function setName(name) {
    return {
        type: "SET_NAME",
        value: name
    };
}

export function increaseProducts(increaseProductsBy) {
    return {
        type: "INCREASE_PRODUCTS",
        value: increaseProductsBy
    };
}

export function decreaseProducts(decreaseProductsBy) {
    return {
        type: "INCREASE_PRODUCTS",
        value: decreaseProductsBy
    };
}