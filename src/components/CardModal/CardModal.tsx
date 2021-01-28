import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { Modal } from '../Modal';
import { CardType } from '../../types';

type Props = {
    setModalOpen: (isOpen: boolean) => void;
    card: CardType
}

export const CardModal: FC<Props> = ({ setModalOpen, card }) => {

    const [cardTitle, setCardTitle] = useState<string>(card.title);
    const [cardDescription, setCardDescription] = useState<string>(card.description || '');
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const handleCloseCardModal = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const handleTitleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setCardTitle(event.target.value);
    }, []);

    return (
        <>
            {isOpen &&
            <Modal onClose={handleCloseCardModal} setOpen={setIsOpen}>
                <input value={cardTitle} onChange={handleTitleInputChange} />
            </Modal>
            }
        </>
    );
};
