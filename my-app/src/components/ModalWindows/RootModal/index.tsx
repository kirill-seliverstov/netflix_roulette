import React, { FC, useEffect  } from 'react'
import ReactDOM from 'react-dom';
import { Logo } from '../../Logo';
import { Wrapper, StyledModal, HeaderText, CloseButton, Content, Header, Backdrop } from './styles';

export interface ModalProps {
    isShown: boolean;
    hide: (value?: any) => void;
    modalContent: React.ReactNode;
    headerText?: string;
}

export const Modal: FC<ModalProps> = ({
    isShown,
    hide,
    modalContent,
    headerText,
}) => {
    const modal = (
        <React.Fragment>
            <Backdrop onClick={hide}><Logo /></Backdrop>
            <Wrapper>
                <StyledModal>
                    <Header>
                        <HeaderText>{headerText}</HeaderText>
                        <CloseButton onClick={hide}>X</CloseButton>
                    </Header>
                    <Content>{modalContent}</Content>
                </StyledModal>
            </Wrapper>
        </React.Fragment>
    );

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};