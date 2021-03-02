import React, { FC, useCallback, useContext, useState } from 'react';
import { AddColumnModal } from './AddColumnModal';
import { AddCardWrapper } from './styles';
import { ThemeTypography } from '../ThemeTypography';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../theme-context';

export const AddNewColumn: FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { t } = useTranslation();
    const themeContext = useContext(ThemeContext);

    const handleClick = useCallback(() => {
        setIsOpen(true);
    }, []);

    return (
        <div>
            <AddCardWrapper
                elevation={3}
                onClick={handleClick}
                bgColor={themeContext.theme.column}
            >
                <ThemeTypography>{t('addNewColumn')}</ThemeTypography>
            </AddCardWrapper>
            {isOpen && <AddColumnModal setIsOpen={setIsOpen} />}
        </div>
    );
};
