import React from 'react';
import styled from 'styled-components';

const ModalDialog = styled.div`
  position: absolute;
  top: 15%;
  left: 15%;
  width: 70%;
  height: 75%;
  z-index: 1;
  background: white;
  opacity: 1;
  box-shadow: grey 0px 2px 2px;
  border-radius: 10px;
  padding: 20px;
`;

const Blur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: lightgray;
  opacity: 0.7;
`;

export function ViewReport({ report, onClose }) {
  return (
    <>
      <Blur onClick={onClose} />
      <ModalDialog>
        ID: {report._id} <br />
        Date registered: {report.registered} <br />
        Name injured: {report.nameInjured} <br />
        First responder: {report.nameResponder} <br />
        Name witness: {report.nameWitness} <br />
        <br />
        Description:
        <br /> {report.descr}
        <br />
      </ModalDialog>
    </>
  );
}
