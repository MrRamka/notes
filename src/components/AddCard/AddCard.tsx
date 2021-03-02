import React, { FC, useCallback, useState } from 'react';
import { ThemeTypography } from '../ThemeTypography';
import { Link } from '@material-ui/core';
import { AddCardModal } from './AddCardModal';
import { CardWrapper } from './styles';
import { useTranslation } from 'react-i18next';
import { AddCardProps } from './types';


export const AddCard: FC<AddCardProps> = ({ columnId }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { t } = useTranslation();

    const handleClick = useCallback(() => {
        setIsOpen(true);
    }, []);

    return (
        <CardWrapper>
            <Link onClick={handleClick}><ThemeTypography>{t('addNewCard')}</ThemeTypography></Link>
            {isOpen && <AddCardModal setIsOpen={setIsOpen} columnId={columnId} />}
        </CardWrapper>
    );
};
