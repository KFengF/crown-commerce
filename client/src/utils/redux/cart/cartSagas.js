import { all, call, takeLatest, put } from 'redux-saga/effects';
import userActionTypes from '../user/userTypes';
import { clearCart } from './cartActions';

function* onSignOut() {
    yield takeLatest(userActionTypes.SIGN_OUT, function* () {
        yield put(clearCart());
    });
}

export function* cartSagas() {
    yield all([call(onSignOut)])
}