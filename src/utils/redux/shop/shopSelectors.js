import { createSelector } from "reselect";

const shopSelector = state => state.shop;

const collectionsSelector = createSelector(
    [shopSelector],
    shop => shop.collections
);

const singleCollectionSelector = collectionUrlParam => 
    createSelector(
        [collectionsSelector],
        collections => ({
            ...collections[collectionUrlParam],
            title: collectionUrlParam
        })
    );

export { collectionsSelector, singleCollectionSelector }