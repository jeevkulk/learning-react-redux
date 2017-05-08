import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import productReducer from "./reducers/productReducer";
import dealerReducer from "./reducers/dealerReducer";


const store = createStore(
    combineReducers(
        {
            product: productReducer,
            dealer: dealerReducer
        }
    ),
    {},
    applyMiddleware(createLogger(), thunk, promise())
);

export default store;