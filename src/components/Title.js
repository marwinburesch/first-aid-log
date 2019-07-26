import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin: 0px;
  display: block;
  font-size: 2em;
  text-align: center;
  grid-column: 2 / span 4;
  /* margin-top: 0.67em;
     margin-bottom: 0.67em;
     margin-left: 0;
     margin-right: 0; */
  font-weight: bold;
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
