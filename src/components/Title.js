import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledTitle = styled.h1`
  grid-column: 2 / span 5;
  grid-row: 1/1;
  margin: 5px 0px 5px 0px;
  display: block;
  font-size: 2em;
  text-align: center;
  font-family: 'Raleway', sans-serif;
`;

export function Title({ text }) {
  return <StyledTitle>{text}</StyledTitle>;
}

Title.propTypes = {
  text: PropTypes.string.isRequired
};

Title.defaultProps = {
  text: 'Enter Title Here'
};
