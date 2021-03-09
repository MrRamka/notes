import React, { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { Modal } from '../Modal';
import { CardType } from '../../types';
import { CardForm } from '../CardForm';
import { useDispatch } from 'react-redux';
import { updateCard } from '../../redux-store/listReduser/actions';
import { CardModalTypes } from './types';
import { useTranslation } from 'react-i18next';

export const CardModal: FC<CardModalTypes> = (props) => {

    const { card, onCancel, cardTitle, cardDescription, setCardDescription, setCardTitle } = props;

    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [hasErrors, setHasErrors] = useState<boolean>(false);
    const [closeOnOk, setCloseOnOk] = useState(false);

    useEffect(() => {
        setCloseOnOk(!hasErrors);
    }, [hasErrors]);

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const handleCloseCardModal = useCallback(() => {
        setIsOpen(false);
        onCancel();
    }, [setIsOpen, onCancel]);

    const handleTitleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setCardTitle(event.target.value);
    }, [setCardTitle]);

    const handleDescriptionInputChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setCardDescription(event.target.value);
    }, [setCardDescription]);

    const handleSaveCard = useCallback(() => {
        if (!hasErrors) {
            const updatedCard: CardType = {
                id: card.id,
                columnId: card.columnId,
                title: cardTitle,
                description: cardDescription,
            };
            dispatch(updateCard(updatedCard));
        }
        return;
    }, [card, cardDescription, cardTitle, dispatch, hasErrors]);

    return (
        <>
            {isOpen &&
            <Modal
                onClose={handleCloseCardModal}
                onOk={handleSaveCard}
                setOpen={setIsOpen}
                header={t('editCard')}
                onCloseText={t('cancelText')}
                onOkText={t('okText')}
                closeOnOK={closeOnOk}
            >
                <CardForm
                    onDescriptionChange={handleDescriptionInputChange}
                    onInputChange={handleTitleInputChange}
                    titleValue={cardTitle}
                    descriptionValue={cardDescription}
                    hasErrors={hasErrors}
                    setHasErrors={setHasErrors}
                />
            </Modal>
            }
        </>
    );
};
