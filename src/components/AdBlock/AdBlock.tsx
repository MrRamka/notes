import React, { FC, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAdFunction } from '../../redux-store/adReducer/actions';
import { selectors } from '../../redux-store';
import { AdBlockType } from './types';
import { ThemeTypography } from '../ThemeTypography';
import { ThemeContext } from '../../theme-context';
import { LoadingIcon } from './styles';

export const START_AD_ID = 1;
export const END_AD_ID = 5;

export const AdBlock: FC<AdBlockType> = ({ loadingType = true }) => {


    const loading = useSelector(selectors.ad.adLoading);
    const ad = useSelector(selectors.ad.displayed);

    const themeContext = useContext(ThemeContext);

    const dispatch = useDispatch();

    useEffect(() => {
        if (loadingType) {
            dispatch(addAdFunction());
        }
    }, [dispatch, loadingType]);

    return (
        <>
            {!loading && ad &&
            <div>
                <ThemeTypography>{ad.id}: {ad.title}</ThemeTypography>
            </div>}
            {loading && loadingType && <LoadingIcon iconColor={themeContext.theme.on_surface} />}
        </>
    );
};
