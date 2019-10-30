import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from './directory/directoryReducer';

const persistConfig = {
    key: 'root', //significa que en root se comenzara a almacenar todo
    storage,
    whitelist: ['cartReducer'] //Pasamos el reductor que queremos almacenar
    //no pasamos el userReducer porque este ya tiene persist con firebase
}

const rootReducer = combineReducers({
    userReducer,
    cartReducer,
    directoryReducer
});

export default persistReducer(persistConfig, rootReducer);
//Estariamos exportando un rootReducer con persist