import React from 'react';

export type DeleteConfirmModalProps = {
    onOk: (e: React.MouseEvent<HTMLElement>) => void;
    onCancel: (e: React.MouseEvent<HTMLElement>) => void;
    setIsOpen: (open: boolean) => void;
}
