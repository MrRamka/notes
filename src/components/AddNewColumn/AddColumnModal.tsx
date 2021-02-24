import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { Modal } from '../Modal';
import { useDispatch } from 'react-redux';
import { uuidv4 } from '../../utils';
import { ColumnType } from '../../types';
import { addColumn } from '../../redux-store/listReduser/actions';

type Props = {
    isOpen: boolean,
    setIsOpen: (valueL: boolean) => void
}

export const AddColumnModal: FC<Props> = ({ isOpen, setIsOpen }) => {

    const dispatch = useDispatch();

    const [columnTitle, setColumnTitle] = useState<string>('');

    const handleSave = useCallback(() => {
        const uuid: string = uuidv4();
        const newColumn: ColumnType = {
            id: uuid,
            title: columnTitle,
            cards: [],
        };
        dispatch(addColumn(newColumn));
    }, [columnTitle, dispatch]);

    const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setColumnTitle(event.target.value);
    }, []);

    return (
        <>
            <Modal
                setOpen={setIsOpen}
                onCloseText='Cancel'
                onOkText='Create column'
                onOk={handleSave}
                header="New column"
            >
                <input onChange={onInputChange} />
            </Modal>
        </>
    );
};
