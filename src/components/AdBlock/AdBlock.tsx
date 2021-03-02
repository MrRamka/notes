import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAdFunction } from '../../redux-store/adReducer/actions';
import { selectors } from '../../redux-store';

export const START_AD_ID = 1;
export const END_AD_ID = 5;

type Props = {
    loadingType?: boolean
}

export const AdBlock: FC<Props> = ({loadingType = true}) => {


    const loading = useSelector(selectors.ad.adLoading);

    const ad = useSelector(selectors.ad.displayed);

    const dispatch = useDispatch();

    useEffect(() => {
        if(loadingType){
            dispatch(addAdFunction());
        }
    }, [dispatch, loadingType]);

    return (
        <>
            {!loading && ad && <p>{ad.id}: {ad.title}</p>}
            {loading && loadingType && <p>Loading...</p>}
        </>
    );
};
