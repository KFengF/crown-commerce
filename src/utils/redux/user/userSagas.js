import { takeLatest, put, all, call } from 'redux-saga/effects';
import userActionTypes from './userTypes';
import { signInSuccess, signInFailure } from './userActions';
import { auth, getUserDocReference, signInWithGoogle } from '../../firebase/firebase';

const { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START } = userActionTypes;

function* signIn(userAuth) {
    const userDocRef = yield call(getUserDocReference, userAuth);
    const docSnapshot = yield userDocRef.get();
    if (!docSnapshot.exists) throw Error("this user doesn't exists")
    yield put(signInSuccess({
        id: docSnapshot.id,
        ...docSnapshot.data()
    }));
}

function* googleSignIn() {
    try {
        const { user } = yield signInWithGoogle();
        yield signIn(user);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, googleSignIn)
}

function* emailSignIn({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield signIn(user);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, emailSignIn)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart)
    ]);
}