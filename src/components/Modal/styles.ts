import styled from 'styled-components';


export const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: black;
  opacity: 0.45;
  z-index: 4;
`;

export const Modal = styled.div`
  min-width: 500px;
  margin: 0 auto;
  background: white;
  z-index: 1000;
  position: fixed;
  top: 15%;
  border-radius: 3px;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  top: 0;
`;

export const Header = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px silver solid;
`;

export const Content = styled.div`
  padding: 1rem 2rem;
`;

export const Footer = styled.div`
  border-top: 1px silver solid;
  padding: 1rem 2rem;
`;

export const CloseButton = styled.span`
    float: right;
    :hover {
      cursor: pointer;
    }
`;

