import React, { FC, useCallback } from 'react';
import { DeleteConfirmModalProps } from './types';
import { Modal } from '../Modal';
import { useTranslation } from 'react-i18next';

export const DeleteConfirmModal: FC<DeleteConfirmModalProps> = (props) => {

    const { onOk, onCancel, children, setIsOpen } = props;

    const { t } = useTranslation();

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
                header={t('deleteColumnModalTitle')}
                onCloseText={t('cancelText')}
                onOkText={t('okText')}
            >
                {children}
            </Modal>

        </>
    );
};
