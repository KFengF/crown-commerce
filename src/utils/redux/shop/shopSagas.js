import { takeLatest, call, put } from 'redux-saga/effects';
import shopActionTypes from './shopTypes';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shopActions';
import { firestore, convertCollsToMap } from '../../firebase/firebase';

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