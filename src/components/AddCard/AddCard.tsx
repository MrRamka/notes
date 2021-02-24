import React, { FC, useCallback, useState } from 'react';
import { ThemeTypography } from '../ThemeTypography';
import { Link } from '@material-ui/core';
import { AddCardModal } from './AddCardModal';

type Props = {
    columnId: string,
}

export const AddCard: FC<Props> = ({ columnId }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = useCallback(() => {
        setIsOpen(true);
    }, []);

    return (
        <div style={{ cursor: 'pointer' }}>
            <Link onClick={handleClick}><ThemeTypography>Add new card</ThemeTypography></Link>
            {isOpen && <AddCardModal isOpen={isOpen} setIsOpen={setIsOpen} columnId={columnId} />}
        </div>
    );
};
