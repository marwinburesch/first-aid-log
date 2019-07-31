import React from 'react';
import PropTypes from 'prop-types';
import reportData from '../utils/__mock.json';
import { ListItem } from './ListItem.js';

const reports = reportData;

export function List({ onSelect }) {
  return (
    <>
      {reports.map(report => {
        return <ListItem report={report} onSelect={onSelect} />;
      })}
    </>
  );
}
