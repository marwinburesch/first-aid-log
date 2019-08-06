import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as PhoneSVG } from '../assets/phone.svg';
import { ReactComponent as PlusSVG } from '../assets/plus.svg';

const ActionButton = styled.button`
  background-color: transparent;
  width: ${props => props.width || '80px'};
  height: ${props => props.width || '80px'};
  border-radius: 10px;
  border: solid 1px #fff;
  box-shadow: 0px 4px 0px #fff;
  transition: all 0.2s;
  color: ${props => props.fill || '#fff'};
  cursor: pointer;
  margin: 10px;
  &:hover {
    background: linear-gradient(to bottom, transparent 0%, rgba(233, 228, 226, 0.5) 100%);
    transform: scale(1.1);
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
  return <ActionButton width={width}>{type === 'plus' ? <PlusSVG /> : <PhoneSVG />}</ActionButton>;
}

Button.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string
};
