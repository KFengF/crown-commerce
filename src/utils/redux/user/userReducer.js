import userActionTypes from './userTypes';

const {
    GOOGLE_SIGN_IN_SUCCESS,
    GOOGLE_SIGN_IN_FAILURE,
    EMAIL_SIGN_IN_SUCCESS,
    EMAIL_SIGN_IN_FAILURE
} = userActionTypes;

const INITIAL_STATE = {
    currentUser: null,
    error: undefined
}

const userReducer = (state=INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case GOOGLE_SIGN_IN_SUCCESS:
        case EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: payload,
                error: undefined
            }
        case GOOGLE_SIGN_IN_FAILURE:
        case EMAIL_SIGN_IN_FAILURE:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}

export default userReducer;