import React from 'react';
import PropTypes from 'prop-types';
import reportData from '../utils/__mock.json';
import { RenderReportBox } from './Reports.js';

const reports = reportData;

export function List() {
  console.log(reports);
  return (
    <>
      {reports.map(report => (
        <RenderReportBox report={report} />
      ))}
    </>
  );
}
