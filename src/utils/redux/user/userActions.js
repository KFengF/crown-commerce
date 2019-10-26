import userActionTypes from './userTypes';

const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
});

export default setCurrentUser;