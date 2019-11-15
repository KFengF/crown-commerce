import shopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isFetching: true,
    errorMessage: undefined
}

const shopReducer = (state=INITIAL_STATE, action) => {
    const {
        FETCH_COLLECTIONS_START,
        FETCH_COLLECTIONS_FAILURE,
        FETCH_COLLECTIONS_SUCCESS 
    } = shopActionTypes;
    const { type, payload } = action;

    switch (type) {
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: payload
            }
        case FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: payload
            }
        default: return state;
    }
}

export default shopReducer;