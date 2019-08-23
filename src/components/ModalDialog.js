import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from './Button';

const slideIn = keyframes`
from {transform: translateY(700px)}
to {transform: translateY(0px)}
`;

const fadeIn = keyframes`
from {opacity: 0}
to {opacity: 1}
`;

const ModalDialogCanvas = styled.div`
  width: 70%;
  max-width: 500px;
  height: 85%;
  color: #000;
  background: white;
  box-shadow: #54b6d2 3px 3px 0px;
  border: solid #54b6d2 3px;
  border-radius: 10px;
  padding: 20px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.5s ease;
  position: relative;
`;

const Blur = styled.div`
  position: fixed;
  z-index: 2;
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

export default function Dialog({ children, onClose, blurCloseActive }) {
  const blurRef = React.useRef(null);

  function handleBlurClick(event) {
    if (event.target === blurRef.current && blurCloseActive === true) {
      onClose();
    }
  }

  return (
    <Blur ref={blurRef} onClick={handleBlurClick}>
      <ModalDialogCanvas>
        <Button
          onClick={onClose}
          ani="none"
          fill="#000"
          type="close"
          width="30px"
          margin="0px"
          transform="scale(1)"
          boxShadow="0px"
          pos="absolute"
          right="0px"
          top="0px"
        />
        {children}
      </ModalDialogCanvas>
    </Blur>
  );
}
