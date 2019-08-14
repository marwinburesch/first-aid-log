import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderBox = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: transparent;
  margin: 20px 0px 10px 0px;
`;

export const StyledTitle = styled.h1`
  margin: 5px 0px 5px 0px;
  display: block;
  font-size: 2em;
  font-family: 'Raleway', sans-serif;
  text-shadow: 3px 3px 0px #54b6d2;
`;

export function Header({ title }) {
  return (
    <HeaderBox>
      <StyledTitle>{title}</StyledTitle>
    </HeaderBox>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

Header.defaultProps = {
  title: 'Enter Title Here'
};
