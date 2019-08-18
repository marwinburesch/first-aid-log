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

export function ViewKit({ kit, onClose }) {
  return (
    <Dialog onClose={onClose} blurCloseActive={true}>
      <Row>
        {kit._id}
        <Sublabel text="ID" />
      </Row>
      <Row>
        {kit.lastUsed}
        <Sublabel text="Last Used" />
      </Row>
      <Row>
        {kit.location}
        <Sublabel text="Location" />
      </Row>
      <Descr>inventory .map goes here :)</Descr>
    </Dialog>
  );
}
