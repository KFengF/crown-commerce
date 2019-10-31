import { createSelector } from 'reselect';

const directorySelector = state => state.directory;

const sectionsSelector = createSelector(
    [directorySelector],
    directory => directory.sections
);

export { sectionsSelector }