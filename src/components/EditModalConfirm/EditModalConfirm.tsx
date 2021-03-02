import React, { FC, useCallback } from 'react';
import { EditModalConfirmProps } from './types';
import { Modal } from '../Modal';
import { useTranslation } from 'react-i18next';

export const EditModalConfirm : FC<EditModalConfirmProps> = (props) => {

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
                header={t('editCard')}
                onCloseText={t('cancelText')}
                onOkText={t('okText')}
            >
                {children}
            </Modal>

        </>
    );
}
