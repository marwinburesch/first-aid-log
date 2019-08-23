import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PhoneSVG } from '../assets/phone.svg';
import { ReactComponent as PlusSVG } from '../assets/plus.svg';
import { ReactComponent as SearchSVG } from '../assets/search.svg';
import { ReactComponent as CloseSVG } from '../assets/close.svg';

const ActionButton = styled.button`
  z-index: ${props => props.z || '0'};
  background-color: ${props => props.bgcolor || 'transparent'};
  width: ${props => props.width || '80px'};
  height: ${props => props.width || '80px'};
  border-radius: 10px;
  border: solid 1px #fff;
  box-shadow: 0px ${props => props.boxShadow || '4px'} 0px #fff;
  transition: all 0.2s;
  color: ${props => props.fill || '#fff'};
  cursor: pointer;
  margin: ${props => props.margin || '10px'};
  position: ${props => props.pos || 'relative'};
  right: ${props => props.right};
  top: ${props => props.top};
  &:hover {
    background: linear-gradient(to bottom, transparent 0%, rgba(233, 228, 226, 0.5) 100%);
    transform: ${props => props.transform || 'scale(1.1)'};
    box-shadow: 0px 0px 0px #fff;
  }
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: 0px 0px 0px #fff;
    transform: scale(1);
  }
`;

const types = {
  plus: '#96D2E3',
  phone: '#81c596',
  search: 'transparent',
  close: 'transparent'
};

function getType(type) {
  return types[type] || types.phone;
}

function getIconType(type) {
  if (type === 'plus') {
    return <PlusSVG />;
  }
  if (type === 'phone') {
    return <PhoneSVG />;
  }
  if (type === 'search') {
    return <SearchSVG />;
  }
  if (type === 'close') {
    return <CloseSVG />;
  }
}

export function Button({ type, ...other }) {
  return (
    <ActionButton bgcolor={getType(type)} {...other}>
      {getIconType(type)}
    </ActionButton>
  );
}

Button.propTypes = {
  z: PropTypes.oneOf([0, 1]),
  bgcolor: PropTypes.oneOf(['plus', 'phone', 'search', 'close']),
  width: PropTypes.string
};
