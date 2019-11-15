import userActionTypes from './user.types';

const {
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
} = userActionTypes;

const INITIAL_STATE = {
    currentUser: null,
    error: undefined
}

const userReducer = (state=INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: payload,
                error: undefined
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                error: undefined
            }
        case SIGN_IN_FAILURE:
        case SIGN_UP_FAILURE:
            return {
                ...state,
                error: payload
            }
        case SIGN_OUT:
            return {
                ...state,
                currentUser: null,
                error: undefined
            }
        default: return state;
    }
}

export default userReducer;