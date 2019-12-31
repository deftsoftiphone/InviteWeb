import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import Reducers from './reducers';
import rootSagas from './sagas';


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, Reducers)


const sagaMiddleware = createSagaMiddleware()
export const Store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
export const Persistor = persistStore(Store)
sagaMiddleware.run(rootSagas)

