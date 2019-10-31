import { createSelector } from 'reselect';

const userSelector = state => state.user;

const currentUserSelector = createSelector(
    [userSelector],
    user => user.currentUser
);

export { currentUserSelector }