import userActionTypes from './userTypes';

const {
    GOOGLE_SIGN_IN_START,
    EMAIL_SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT
} = userActionTypes;

export const googleSignInStart = () => ({
    type: GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
    type: EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const signInSuccess = user => ({
    type: SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = error => ({
    type: SIGN_IN_FAILURE,
    payload: error
});

export const signOut = () => ({
    type: SIGN_OUT
});