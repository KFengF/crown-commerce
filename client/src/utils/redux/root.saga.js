import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga() {
    yield all([ //all sirve para inicializar todos los sagas
        call(fetchCollectionsStart),
        call(userSagas),
        call(cartSagas)
    ]);
}