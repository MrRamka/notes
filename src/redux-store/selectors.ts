import { RootState } from './rootReducer';
import { ColumnType } from '../types';
import { AdType } from './adReducer/reducer';

export const list = {
    columnList: (state: RootState): ColumnType[] => state.listReducer.list,
};

export const ad = {
    adList: (state: RootState): AdType[] => state.adReducer.ads,
    adLoading: (state: RootState): boolean => state.adReducer.loading,
    displayed: (state: RootState): AdType | null => state.adReducer.displayed,
};

