import React from 'react';
import styled from 'styled-components';
import Sublabel from './Sublable';
import { ModalDialogCanvas, Blur } from './ModalDialog';

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

const CloseOnClickArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
`;

export function ViewReport({ report, onClose }) {
  return (
    <Blur>
      <ModalDialogCanvas>
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
      </ModalDialogCanvas>
      <CloseOnClickArea onClick={onClose} />
    </Blur>
  );
}
