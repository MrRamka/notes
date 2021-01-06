import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const MainPage: FC = () => {
    const {t, i18n} = useTranslation();

    const changeLanguage = useCallback((language: string) => {
        i18n.changeLanguage(language);
    }, [i18n])

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('ru')}>RU</button>
            <hr/>
            <div><h1>{t('title')}</h1></div>
            <div>{t('description.part1')}</div>
            <div>{t('description.part2')}</div>
        </div>
    );
}
