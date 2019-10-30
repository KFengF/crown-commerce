import { createSelector } from 'reselect';

const userSelector = state => state.userReducer;

const currentUserSelector = createSelector(
    [userSelector],
    userReducer => userReducer.currentUser
);

export { currentUserSelector }