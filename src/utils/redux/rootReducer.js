import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer';

const persistConfig = {
    key: 'root', //significa que en root se comenzara a almacenar todo
    storage, //Este storage importado indica el tipo de almacenamiento
    whitelist: ['cart'] //Pasamos el reductor que queremos almacenar
    //no pasamos el userReducer porque este ya tiene persist con firebase
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
//Estariamos exportando un rootReducer con persist