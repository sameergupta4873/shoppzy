import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {productListReducer} from './reducers/productReducer'
import productDetailsReducer from "./reducers/productDetailsReducer";
import { cartReducer } from "./reducers/cartReducer";
import {userLoginReducer} from "./reducers/userReducer"
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart : cartReducer,
    userLogin : userLoginReducer
});

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : []


const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : null

const initialState = {
    cart : {cartItems : cartItemsFromLocalStorage},
    userLogin : {userInfo: userInfoFromLocalStorage}
}
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;