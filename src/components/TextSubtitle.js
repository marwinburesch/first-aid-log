import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const colors = {
  default: '#c1b1aa',
  black: '#000',
  grey: '#a3a3a3'
};

const lines = {
  default: 'solid',
  off: 'hidden'
};

function getColor(color) {
  return colors[color] || colors.default;
}

function getLine(line) {
  return lines[line] || lines.default;
}

const Subtitle = styled.div`
  width: 100%;
  font-size: 11px;
  color: ${props => getColor(props.color)};
  border-top: ${props => getLine(props.line)} 2px #c1b1aa;
`;

function Sublabel({ text, color, line }) {
  return <Subtitle>{text}</Subtitle>;
}

Sublabel.propTypes = {
  color: PropTypes.oneOf(['default', 'black', 'grey'])
};

export default Sublabel;
