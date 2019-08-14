import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
from {transform: translateY(700px)}
to {transform: translateY(0px)}
`;

const fadeIn = keyframes`
from {opacity: 0}
to {opacity: 1}
`;

export const ModalDialogCanvas = styled.div`
  width: 70%;
  max-width: 500px;
  height: 85%;
  z-index: 1;
  color: #000;
  background: white;
  box-shadow: #54b6d2 3px 3px 0px;
  border: solid #54b6d2 3px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.5s ease;
`;

export const Blur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.1s ease-in-out;
`;
