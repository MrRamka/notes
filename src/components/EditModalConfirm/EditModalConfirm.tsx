import React, { FC, useCallback } from 'react';
import { EditModalConfirmProps } from './types';
import { Modal } from '../Modal';

export const EditModalConfirm : FC<EditModalConfirmProps> = (props) => {

    const { onOk, onCancel, children, setIsOpen } = props;

    const handleCloseCardModal = useCallback((e: React.MouseEvent<HTMLElement>) => {
        setIsOpen(false);
        onCancel(e);
    }, [setIsOpen, onCancel]);

    return (
        <>
            <Modal
                onClose={handleCloseCardModal}
                onOk={onOk}
                setOpen={setIsOpen}
                header={`You sure`}
                onCloseText='No'
                onOkText='Yes'
            >
                {children}
            </Modal>

        </>
    );
}
