import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
/* import thunk from 'redux-thunk'; */
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') middlewares.push(logger);

const store = createStore( rootReducer, applyMiddleware(...middlewares) );
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor }