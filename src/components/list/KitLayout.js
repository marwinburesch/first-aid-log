import React from 'react';
import styled from 'styled-components';
import Sublabel from '../Sublable';

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

export function KitLayout({ kit }) {
  return (
    <>
      <Row>
        {kit._id}
        <Sublabel text="ID" />
      </Row>
      <Row>
        {kit.date}
        <Sublabel text="Last Used" />
      </Row>
      <Row>
        {kit.name}
        <Sublabel text="Location" />
      </Row>
      <Descr>inventory .map goes here :)</Descr>
    </>
  );
}
