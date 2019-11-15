import { createSelector } from "reselect";

const shopSelector = state => state.shop;

export const collectionsSelector = createSelector(
    [shopSelector],
    shop => shop.collections
);

export const singleCollectionSelector = collectionUrlParam => 
    createSelector(
        [collectionsSelector],
        collections => 
            collections ? ({ 
                ...collections[collectionUrlParam],
                title: collectionUrlParam
            }) :
            null
    );

export const isCollectionsFetchingSelector = createSelector(
    [shopSelector],
    shop => shop.isFetching
);