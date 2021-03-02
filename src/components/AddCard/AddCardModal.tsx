import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { uuidv4 } from '../../utils';
import { CardType } from '../../types';
import { addCard } from '../../redux-store/listReduser/actions';
import { Modal } from '../Modal';
import { CardForm } from '../CardForm';
import { AdBlock } from '../AdBlock';
import { AddCardModalType } from './types';
import { useTranslation } from 'react-i18next';


export const AddCardModal: FC<AddCardModalType> = ({ setIsOpen, columnId }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const [cardTitle, setCardTitle] = useState<string>('');
    const [cardDescription, setCardDescription] = useState<string>('');

    const handleSave = useCallback(() => {
        const uuid: string = uuidv4();
        const card: CardType = {
            description: cardDescription,
            id: uuid,
            title: cardTitle,
            columnId: columnId,
        };
        dispatch(addCard(card));
    }, [cardTitle, cardDescription, columnId, dispatch]);

    const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setCardTitle(event.target.value);
    }, []);

    const onDescriptionChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setCardDescription(event.target.value);
    }, []);

    return (
        <>
            <Modal
                setOpen={setIsOpen}
                onCloseText={t('cancelText')}
                onOkText={t('addCardModalOkText')}
                onOk={handleSave}
                header={t('addCardModalHeader')}
            >
                <CardForm onInputChange={onInputChange} onDescriptionChange={onDescriptionChange} />
                <AdBlock loadingType={false} />
            </Modal>
        </>
    );
};
