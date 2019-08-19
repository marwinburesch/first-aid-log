import PropTypes from 'prop-types';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ListItem, ReportBox } from './ListItem.js';

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

export function List({ onSelect, data }) {
  return (
    <ListWrapper>
      {data &&
        data.map(item => {
          return <ListItem key={item._id} item={item} onSelect={onSelect} />;
        })}
    </ListWrapper>
  );
}

List.propTypes = {
  onSelect: PropTypes.func.isRequired
};
