import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as PhoneSVG } from '../assets/phone.svg';
import { ReactComponent as PlusSVG } from '../assets/plus.svg';

const ActionButton = styled.button`
  background-color: ${props => props.bgcolor || '#f5a099'};
  width: ${props => props.width || '80px'};
  height: ${props => props.width || '80px'};
  border-radius: 10px;
  border: solid 1px #fff;
  box-shadow: 0px 4px 0px #fff;
  transition: all 0.2s;
  color: ${props => props.fill || '#fff'};
  cursor: pointer;
  margin: 10px;
  /* display: flex; */
  /* flex-direction: row; */
  &:hover {
    background: linear-gradient(to bottom, transparent 0%, rgba(233, 228, 226, 0.5) 100%);
    transform: scale(1.1);
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

export function Button({ fill, width, type, ...props }) {
  const types = {
    plus: '#7EC493',
    phone: '#f5a099'
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
  }

  return (
    <ActionButton bgcolor={getType(type)} width={width}>
      {getIconType(type)}
    </ActionButton>
  );
}

Button.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string
};
