import userActionTypes from './userTypes';

const {
    GOOGLE_SIGN_IN_START,
    EMAIL_SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
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

export const signUpStart = datas => ({
    type: SIGN_UP_START,
    payload: datas
});

export const signUpSuccess = () => ({
    type: SIGN_UP_SUCCESS
});

export const signUpFailure = error => ({
    type: SIGN_UP_FAILURE,
    payload: error
});