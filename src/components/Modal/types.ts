import React from 'react';

export type ModalProps = {
    setOpen: (isOpen: boolean) => void;
    onClose?: (e: React.MouseEvent<HTMLElement>) => void;
    onOk?: (e: React.MouseEvent<HTMLElement>) => void;
    header?: React.ReactNode;
    onOkText?: string;
    onCloseText?: string;
}
