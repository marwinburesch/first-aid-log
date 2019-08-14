import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ReportBox } from './ListItem.js';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
from {transform: translateX(-400px); opacity: 0; }
to {transform: translateX(0px); opacity: 1;}
`;

const ListWrapper = styled.div`
  width: 100%;
  ${ReportBox}:nth-child(1n) {
    animation: ${slideIn} 0.5s ease;
  }
`;

export function List({ onSelect, reports }) {
  return (
    <ListWrapper>
      {reports &&
        reports.map(report => {
          return <ListItem key={report._id} report={report} onSelect={onSelect} />;
        })}
    </ListWrapper>
  );
}

List.propTypes = {
  onSelect: PropTypes.func.isRequired
};
