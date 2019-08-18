import PropTypes from 'prop-types';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { KitListItem, KitBox } from './KitListItem.js';

const slideIn = keyframes`
from {transform: translateX(-400px); opacity: 0; }
to {transform: translateX(0px); opacity: 1;}
`;

const ListWrapper = styled.div`
  width: 100%;
  ${KitBox}:nth-child(1n) {
    animation: ${slideIn} 0.5s ease;
  }
`;

export function KitList({ onSelect, kits }) {
  return (
    <ListWrapper>
      {kits &&
        kits.map(kit => {
          return <KitListItem key={kit._id} kit={kit} onSelect={onSelect} />;
        })}
    </ListWrapper>
  );
}

KitList.propTypes = {
  onSelect: PropTypes.func.isRequired
};
