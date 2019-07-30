import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import reportData from '../utils/__mock.json';

const reports = reportData;

const ReportBoxShadow = styled.div``;

const ReportBox = styled.div`
  width: 100%;
  height: 48px;
  min-height: 48px;
  margin-bottom: 20px;

  border-radius: 24px;
  font-size: 12px;
  text-align: center;
  border: solid #54b6d2 1px;
  background: transparent;
  border: 1px solid #54b6d2;
  box-sizing: border-box;
  box-shadow: 0px 3px 0px #54b6d2;
`;

function renderReportBox(report) {
  return (
    <ReportBox>
      {report.index} {report.registered} {report.nameInjured}
    </ReportBox>
  );
}

export function List() {
  console.log(reports);
  return <>{reports.map(report => renderReportBox(report))}</>;
}
