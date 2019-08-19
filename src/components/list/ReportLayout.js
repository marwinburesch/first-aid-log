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

export function ReportLayout({ report }) {
  return (
    <>
      <Row>
        {report._id}
        <Sublabel text="ID" />
      </Row>
      <Row>
        {report.date}
        <Sublabel text="Date" />
      </Row>
      <Row>
        {report.name}
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
    </>
  );
}
