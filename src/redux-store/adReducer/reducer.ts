import { AnyAction } from 'redux';
import { AdActionType } from './types';

export type AdType = {
    id: number,
    title: string,
    body: string,
}

type AdStore = {
    ads: AdType[],
    loading: boolean,
    displayed: AdType | null,
}


const initialState: AdStore = {
    ads: [],
    loading: false,
    displayed: null,
};

export const adReducer = (state = initialState, action: AnyAction): AdStore => {
    console.log(state.ads);
    switch (action.type) {
        case AdActionType.LOADING:
            return {
                ...state,
                loading: action.payload,
            };

        case AdActionType.ADD_AD:
            return {
                ...state,
                ads: [...state.ads, action.payload],
            };
        case AdActionType.REMOVE_ADS:
            return {
                ...state,
                ads: [],
                displayed: null,
            };
        case AdActionType.UPDATE_DISPLAYED_AD: {
            return {
                ...state,
                displayed: action.payload,
            };
        }
        default:
            return { ...state };
    }
};
