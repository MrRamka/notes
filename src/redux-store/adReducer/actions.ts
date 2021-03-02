import { Action, Dispatch } from 'redux';
import axios from 'axios';
import { AdActionType } from './types';
import { AdType } from './reducer';
import { RootState } from '../rootReducer';
import { getRandomInt } from '../../utils';
import { END_AD_ID, START_AD_ID } from '../../components/AdBlock';

export interface AddAdAction extends Action<AdActionType.ADD_AD> {
    payload: AdType;
}

export const addAd = (ad: AdType): AddAdAction => ({
    payload: ad,
    type: AdActionType.ADD_AD,
});

export interface LoadingAdAction extends Action<AdActionType.LOADING> {
    payload: boolean;
}

export const loadingAd = (loading: boolean): LoadingAdAction => ({
    payload: loading,
    type: AdActionType.LOADING,
});

export interface RemoveAdsAction extends Action<AdActionType.REMOVE_ADS> {
}

export const removeAds = (): RemoveAdsAction => ({
    type: AdActionType.REMOVE_ADS,
});

export interface UpdateDisplayedAdAction extends Action<AdActionType.UPDATE_DISPLAYED_AD> {
    payload: AdType;
}

export const updateDisplayedAd = (ad: AdType): UpdateDisplayedAdAction => ({
    payload: ad,
    type: AdActionType.UPDATE_DISPLAYED_AD,
});


export const addAdFunction = () => {
    return (dispatch: Dispatch, getState: () => RootState) => {
        dispatch(loadingAd(true));

        let ads = getState().adReducer.ads;

        const arrMaxLength = END_AD_ID - 1;

        if (ads.length === arrMaxLength) {
            dispatch(removeAds());
            //update state
            ads = [];
        }

        const isExistId = (id: number): boolean => {
            return !!ads.find((ad) => ad.id === id);
        };
        let randomId = getRandomInt(START_AD_ID, END_AD_ID);
        while (isExistId(randomId)) {
            randomId = getRandomInt(START_AD_ID, END_AD_ID);
        }

        axios
            .get(`https://jsonplaceholder.typicode.com/todos/${randomId}`)
            .then(result =>
                setTimeout(() => {
                    dispatch(addAd(result.data));
                    dispatch(updateDisplayedAd(result.data));
                    dispatch(loadingAd(false));
                }, 1500));


    };
};
