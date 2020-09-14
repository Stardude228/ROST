import {combineReducers} from 'redux'
import AuthReducer from './auth/reducer'
import CartReducer from './cart/reducer'
import ProductReducer from './products/reducer'

export default combineReducers({
    AuthReducer,
    CartReducer,
    ProductReducer
})