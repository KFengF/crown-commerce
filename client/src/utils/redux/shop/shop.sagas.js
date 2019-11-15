import { takeLatest, call, put } from 'redux-saga/effects';
import shopActionTypes from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';
import { firestore, convertCollsToMap } from '../../firebase/firebase.utils';

export function* fetchCollectionsAsync() { //Esto es una funcion generator
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        if (snapshot.empty) throw Error('Firestore querySnapshot is empty');
        const collectionsMap = yield call(convertCollsToMap, snapshot);
        //call invoca la funcion de manera que la saga sepa
        yield put(fetchCollectionsSuccess(collectionsMap));
        //put funciona igual a dispatch
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }

}

export function* fetchCollectionsStart() {
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}