import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shopSagas';
import { userSagas } from './user/userSagas';

export default function* rootSaga() {
    yield all([ //all sirve para inicializar todos los sagas
        call(fetchCollectionsStart),
        call(userSagas)
    ]);
}