import shopActionTypes from './shop.types';

const {
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAILURE
} = shopActionTypes;

const fetchCollectionsStart = () => ({
    type: FETCH_COLLECTIONS_START
});

const fetchCollectionsSuccess = collections => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collections
});

const fetchCollectionsFailure = error => ({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: error
});

/* const fetchCollectionsStartAsync = () => dispatch => {
    //Para esta funcion se necesita redux-thunk
    const collectionRef = firestore.collection('collections');

    dispatch(fetchCollectionsStart())

    collectionRef.onSnapshot(async snapshot => {
        //Promise pattern: collectionRef.get().then(snapshot => {})
        //fetch pattern: fetch('https://firestore.googleapis.com/v1/projects
        ///crown-db-d428e/databases/(default)/documents/collections')
        //.then(resp => resp.json()).then(console.log) 
        try {
            const newDataArray = snapshot.docs.map(doc => {
                const { title, items } = doc.data();

                return {
                    routeName: encodeURI(title),
                    id: doc.id,
                    title,
                    items
                }
            });

            const newCollections = newDataArray.reduce((accumulator, data) => {
                accumulator[data.title] = data;
                return accumulator;
            }, {});

            dispatch(fetchCollectionsSuccess(newCollections));
        } catch (error) {
            dispatch(fetchCollectionsFailure(error));
        }
    });    
} */

export {
    fetchCollectionsStart,
    fetchCollectionsSuccess,
    fetchCollectionsFailure
}