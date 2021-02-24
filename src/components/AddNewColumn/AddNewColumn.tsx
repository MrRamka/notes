import React, { FC, useCallback, useState } from 'react';
import { Card } from '@material-ui/core';
import { AddColumnModal } from './AddColumnModal';

export const AddNewColumn: FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = useCallback(() => {
        setIsOpen(true);
    }, []);

    return (
        <div>
            <Card onClick={handleClick}>
                Add new column
            </Card>
            {isOpen && <AddColumnModal isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
    );
};
