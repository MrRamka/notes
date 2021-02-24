import React, { FC, useCallback, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Content, Footer, Header, Modal as StyledModal, ModalShadow, ModalWrapper } from './styles';
import { ThemeContext } from '../../theme-context';
import { ThemeTypography } from '../ThemeTypography';
import { ModalProps } from './types';
import { CloseButton } from '../CloseButton';
import { Button } from '../Buttons';


export const Modal: FC<ModalProps> = (props) => {

    const { children, setOpen, onOk, onClose, header, onCloseText, onOkText } = props;

    const handleClose = useCallback((e: React.MouseEvent<HTMLElement>) => {
        onClose?.(e);
        setOpen(false);
    }, [setOpen, onClose]);

    const handleSubmit = useCallback((e: React.MouseEvent<HTMLElement>) => {
        onOk?.(e);
        setOpen(false);
    }, [onOk, setOpen]);


    const theme = useContext(ThemeContext);

    return ReactDOM.createPortal(
        <>
            <ModalShadow onClick={handleClose} />
            <ModalWrapper>
                <StyledModal backgroundColor={theme.theme.surface}>
                    <Header>
                        <ThemeTypography>
                            {header}
                        </ThemeTypography>
                        <CloseButton onClick={handleClose} />
                    </Header>
                    <Content>
                        {children}
                    </Content>
                    <Footer>
                        <Button onClick={handleClose} buttonColor={theme.theme.error}>{onCloseText}</Button>
                        <Button onClick={handleSubmit} buttonColor={theme.theme.primary}>{onOkText}</Button>
                    </Footer>
                </StyledModal>
            </ModalWrapper>
        </>
        , document.body);
};
