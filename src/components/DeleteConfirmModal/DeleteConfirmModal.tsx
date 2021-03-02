import React, { FC, useCallback, useState } from 'react';
import { DeleteConfirmModalProps } from './types';
import { Modal } from '../Modal';

export const DeleteConfirmModal: FC<DeleteConfirmModalProps> = (props) => {

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
                header={`Delete column`}
                onCloseText='Close'
                onOkText='Ok'
            >
                {children}
            </Modal>

        </>
    );
};
