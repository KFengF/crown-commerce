import { createSelector } from "reselect";

const shopSelector = state => state.shopReducer;

const collectionsSelector = createSelector(
    [shopSelector],
    shopReducer => shopReducer.collections
);

export { collectionsSelector }