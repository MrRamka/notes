import { combineReducers } from 'redux';
import { listReducer } from './listReduser/reducer';

export const rootReducer = combineReducers({
    listReducer: listReducer
});

export type RootState = ReturnType<typeof rootReducer>;
