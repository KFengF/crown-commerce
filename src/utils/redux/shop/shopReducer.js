import shopActionTypes from './shopTypes';

const INITIAL_STATE = {
    collections: null
}

const shopReducer = (state=INITIAL_STATE, action) => {
    const { POST_COLLECTIONS } = shopActionTypes;
    const { type, payload } = action;

    switch (type) {
        case POST_COLLECTIONS:
            return {
                ...state,
                collections: payload
            }
        default: return state;
    }
}

export default shopReducer;