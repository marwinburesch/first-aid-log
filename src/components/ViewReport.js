import React from 'react';
import styled from 'styled-components';
import Sublabel from './TextSubtitle';

const ModalDialog = styled.div`
  width: 70%;
  height: 75%;
  z-index: 1;
  background: white;
  opacity: 1;
  box-shadow: grey 0px 4px 4px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  z-index: 1;
`;

const Row = styled.div`
  position: relative;
  width: fit-content;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Descr = styled.p`
  width: 100%;
  text-align: justify;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Blur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(193, 177, 170, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseOnClickArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  opacity: 0.1;
`;

export function ViewReport({ report, onClose }) {
  return (
    <Blur>
      <ModalDialog>
        <Row>
          {report._id}
          <Sublabel text="ID" />
        </Row>
        <Row>
          {report.registered}
          <Sublabel text="Date" />
        </Row>
        <Row>
          {report.nameInjured}
          <Sublabel text="Name Injured" />
        </Row>
        <Row>
          {report.nameResponder}
          <Sublabel text="First Responder" />
        </Row>
        <Row>
          {report.nameWitness}
          <Sublabel text="Witness" />
        </Row>
        <Descr>{report.descr}</Descr>
      </ModalDialog>
      <CloseOnClickArea onClick={onClose} />
    </Blur>
  );
}
