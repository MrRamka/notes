import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { uuidv4 } from '../../utils';
import { CardType } from '../../types';
import { addCard } from '../../redux-store/listReduser/actions';
import { Modal } from '../Modal';
import { Input } from '../Input';

type Props = {
    isOpen: boolean,
    setIsOpen: (valueL: boolean) => void,
    columnId: string;
}

export const AddCardModal: FC<Props> = ({ isOpen, setIsOpen, columnId }) => {
    const dispatch = useDispatch();

    const [cardTitle, setCardTitle] = useState<string>('');
    const [cardDescription, setCardDescription] = useState<string>('');

    const handleSave = useCallback(() => {
        const uuid: string = uuidv4();
        const card: CardType = {
            description: cardDescription,
            id: uuid,
            title: cardTitle,
        };
        dispatch(addCard({ card, columnId }));
    }, [cardTitle, cardDescription, columnId, dispatch]);

    const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setCardTitle(event.target.value);
    }, []);

    const onDescriptionChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setCardDescription(event.target.value);
    }, []);

    return (
        <>
            <Modal
                setOpen={setIsOpen}
                onCloseText='Cancel'
                onOkText='Create card'
                onOk={handleSave}
                header='New card'
            >
                <Input onChange={onInputChange} name='title' label='Title'/>
                <Input onChange={onDescriptionChange} name='description' label='Description'/>
            </Modal>
        </>
    );
};
