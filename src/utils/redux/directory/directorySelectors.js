import { createSelector } from 'reselect';

const directorySelector = state => state.directoryReducer;

const sectionsSelector = createSelector(
    [directorySelector],
    directoryReducer => directoryReducer.sections
);

export { sectionsSelector }