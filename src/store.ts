import { applyMiddleware, createStore, Middleware } from 'redux';
import { logger } from 'redux-logger';
import { rootReducer } from './redux-store';

const middlewares: Middleware[] = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
