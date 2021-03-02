import { combineReducers } from 'redux';
import { listReducer } from './listReduser/reducer';
import { adReducer } from './adReducer/reducer';

export const rootReducer = combineReducers({
    listReducer: listReducer,
    adReducer: adReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
