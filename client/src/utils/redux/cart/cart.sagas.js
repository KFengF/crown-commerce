import { all, call, takeLatest, put } from 'redux-saga/effects';
import userActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';

function* onSignOut() {
    yield takeLatest(userActionTypes.SIGN_OUT, function* () {
        yield put(clearCart());
    });
}

export function* cartSagas() {
    yield all([call(onSignOut)])
}