import { all, call, takeLatest, put } from 'redux-saga/effects';
import userActionTypes from '../user/userTypes';
import { clearCart } from './cartActions';

function* clearCartSaga() {
    yield put(clearCart());
}

function* onSignOut() {
    yield takeLatest(userActionTypes.SIGN_OUT, clearCartSaga);
}

export function* cartSagas() {
    yield all([call(onSignOut)])
}