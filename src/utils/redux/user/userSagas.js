import { takeLatest, take, put, all, call } from 'redux-saga/effects';
import userActionTypes from './userTypes';
import { signInSuccess, signInFailure, signOut, signUpSuccess, signUpFailure, emailSignInStart } from './userActions';
import { auth, getUserDocReference, signInWithGoogle, createUserDoc } from '../../firebase/firebase';

const { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START, SIGN_OUT, SIGN_UP_START } = userActionTypes;

function* signIn(userAuth) {
    const userDocRef = yield call(getUserDocReference, userAuth);
    const docSnapshot = yield userDocRef.get();
    yield put(signInSuccess({
        id: docSnapshot.id,
        ...docSnapshot.data()
    }));
}

function* googleSignInSaga() {
    try {
        const { user } = yield signInWithGoogle();
        yield signIn(user);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, googleSignInSaga)
}

function* emailSignInSaga({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield signIn(user);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, emailSignInSaga);
}

function* signUpSaga({ payload: { displayName, email, password } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield createUserDoc(user, { displayName });
        yield put(signUpSuccess());
        yield put(emailSignInStart({ email, password }));
    } catch (error) {
        yield put(signUpFailure(error.message))
    }
}

function* onSignUpStart() {
    yield takeLatest(SIGN_UP_START, signUpSaga)
}

function* signOutSaga() {
    yield put(signOut());
    yield take(SIGN_OUT);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(signOutSaga),
        call(onSignUpStart)
    ]);
}