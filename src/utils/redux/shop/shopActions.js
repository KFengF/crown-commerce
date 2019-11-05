import shopActionTypes from './shopTypes';

const postCollections = collections => ({
    type: shopActionTypes.POST_COLLECTIONS,
    payload: collections
});

export { postCollections }