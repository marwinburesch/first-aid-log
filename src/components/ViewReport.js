import React from 'react';
import styled from 'styled-components';
import Dialog from './ModalDialog';
import Sublabel from './Sublable';

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

export function ViewReport({ report, onClose }) {
  return (
    <Dialog onClose={onClose} blurCloseActive={true}>
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
    </Dialog>
  );
}
