import styled from 'styled-components';

export const ModalDialogCanvas = styled.div`
  width: 70%;
  max-width: 500px;
  height: 85%;
  z-index: 1;
  color: #000;
  background: white;
  box-shadow: #96d2e3 3px 3px 0px;
  border: solid #96d2e3 3px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
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
`;
