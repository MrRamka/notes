import React, { FC, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { CloseButton, Content, Footer, Header, Modal as StyledModal, ModalShadow, ModalWrapper } from './styles';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

type Props = {
    setOpen: (isOpen: boolean) => void;
    onClose?: (e: React.MouseEvent<HTMLElement>) => void;
    onOk?: (e: React.MouseEvent<HTMLElement>) => void;
}


export const Modal: FC<Props> = ({ children, onClose, setOpen, onOk }) => {

    const handleClose = useCallback((e: React.MouseEvent<HTMLElement>) => {
        onClose?.(e);
        setOpen(false);
    }, [setOpen, onClose]);

    const handleSubmit = useCallback((e: React.MouseEvent<HTMLElement>) => {
        onOk?.(e);
        setOpen(false);
    }, [onOk, setOpen]);


    return ReactDOM.createPortal(
        <>
            <ModalShadow onClick={handleClose} />
            <ModalWrapper>
                <StyledModal>
                    <Header>
                        Modal header
                        <CloseButton onClick={handleClose} style={{ float: 'right' }}><CloseIcon /></CloseButton>
                    </Header>
                    <Content>
                        {children}
                    </Content>
                    <Footer>
                        <Button variant='outlined' onClick={handleClose}>Close</Button>
                        <Button variant='outlined' color='primary' onClick={handleSubmit}>Ok</Button>
                    </Footer>
                </StyledModal>
            </ModalWrapper>
        </>
        , document.body);
};
