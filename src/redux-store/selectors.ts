import { RootState } from './rootReducer';
import { ColumnType } from '../types';

export const list = {
    columnList: (state: RootState): ColumnType[] => state.listReducer.list,
};

