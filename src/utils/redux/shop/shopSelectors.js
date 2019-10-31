import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const shopSelector = state => state.shop;

const collectionsSelector = createSelector(
    [shopSelector],
    shop => shop.collections
);

const singleCollectionSelector = collectionUrlParam => 
    createSelector(
        [collectionsSelector],
        collections => collections.find(
            collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        )
    )

export { collectionsSelector, singleCollectionSelector }