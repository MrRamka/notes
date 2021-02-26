import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { Modal } from '../Modal';
import { CardType } from '../../types';
import { CardForm } from '../CardForm';
import { useDispatch } from 'react-redux';
import { updateCard } from '../../redux-store/listReduser/actions';

type Props = {
    card: CardType
    columnId: string
}

export const CardModal: FC<Props> = ({ card, columnId }) => {

    const [cardTitle, setCardTitle] = useState<string>(card.title);
    const [cardDescription, setCardDescription] = useState<string>(card.description || '');
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const dispatch = useDispatch();

    const handleCloseCardModal = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const handleTitleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setCardTitle(event.target.value);
    }, []);

    const handleDescriptionInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setCardDescription(event.target.value);
    }, []);

    const handleSaveCard = useCallback(() => {
        const updatedCard: CardType = {
            id: card.id,
            columnId: card.columnId,
            title: cardTitle,
            description: cardDescription,
        };

        dispatch(updateCard(updatedCard));
    }, [card, cardDescription, cardTitle, dispatch]);

    return (
        <>
            {isOpen &&
            <Modal
                onClose={handleCloseCardModal}
                onOk={handleSaveCard}
                setOpen={setIsOpen}
                header='Edit card'
                onCloseText='Close'
                onOkText='Ok'
            >
                <CardForm
                    onDescriptionChange={handleDescriptionInputChange}
                    onInputChange={handleTitleInputChange}
                    titleValue={cardTitle}
                    descriptionValue={cardDescription}
                />
            </Modal>
            }
        </>
    );
};
