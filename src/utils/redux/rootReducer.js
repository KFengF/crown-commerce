import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
    userReducer,
    cartReducer
});

export default rootReducer;