import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { Modal } from '../Modal';
import { useDispatch } from 'react-redux';
import { uuidv4 } from '../../utils';
import { ColumnType } from '../../types';
import { addColumn } from '../../redux-store/listReduser/actions';
import { AddColumnModalProps } from './types';
import { useTranslation } from 'react-i18next';
import { Input } from '../Input';

export const AddColumnModal: FC<AddColumnModalProps> = ({ setIsOpen }) => {

    const dispatch = useDispatch();
    const { t } = useTranslation();

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
                onCloseText={t('cancelText')}
                onOkText={t('addColumnModalOkText')}
                onOk={handleSave}
                header={t('addColumnModalHeader')}
            >
               <Input label={t('addColumnTitle')}  name="columnTitle" onChange={onInputChange}/>
            </Modal>
        </>
    );
};
