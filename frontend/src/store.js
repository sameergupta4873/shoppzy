import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {productListReducer} from './reducers/productReducer'
import productDetailsReducer from "./reducers/productDetailsReducer";
import { cartReducer } from "./reducers/cartReducer";
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart : cartReducer
});

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart : {cartItems : []}
}
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;