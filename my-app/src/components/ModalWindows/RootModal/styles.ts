import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: 40%;
  outline: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 500;
  backdrop-filter: blur(1rem);
  margin-left: 2rem;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: #232323;
  position: relative;
  margin: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1rem 0.5rem 2rem 2rem;
`;

export const HeaderText = styled.div`
  margin-top: 2.5rem;

  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  color: #ffffff;

  align-self: center;
`;

export const CloseButton = styled.button`
  background-color: inherit;
  color: #ffffff;
 
  align-self: flex-start;

  border: none;
 
  font-size: 2rem;

  margin-top: 1rem;

  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  margin: 0 2rem;

  overflow-x: hidden;
  overflow-y: auto;
`;