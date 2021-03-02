import { applyMiddleware, createStore, Middleware } from 'redux';
import { logger } from 'redux-logger';
import { rootReducer } from './redux-store';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    debug: true,
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

const middlewares: Middleware[] = [logger, thunk];


const store = createStore(persistedReducers, applyMiddleware(...middlewares));
const persistor = persistStore(store);
export { store, persistor };

