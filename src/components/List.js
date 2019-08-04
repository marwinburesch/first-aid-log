import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from './ListItem.js';

export function List({ onSelect, reports }) {
  return (
    <>
      {reports &&
        reports.map(report => {
          return <ListItem key={report._id} report={report} onSelect={onSelect} />;
        })}
    </>
  );
}

List.propTypes = {
  onSelect: PropTypes.func.isRequired
};
