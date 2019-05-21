import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import reducer from './reducers/';
import thunkMiddleware from 'redux-thunk';

export default () => {
    const persistConfig = {
        key: 'root',
        storage,
        stateReconciler: hardSet
    };

    const persistedReducer = persistReducer(persistConfig, reducer);
    // noinspection JSUnresolvedVariable
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(persistedReducer, composeEnhancers(
        applyMiddleware(thunkMiddleware)
    ));
    const persistor = persistStore(store);
    return { store, persistor };
}
