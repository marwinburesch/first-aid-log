import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderBox = styled.div`
  position: fixed;
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  color: white;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #ef685d;
`;

const MenuBox = styled.div`
  width: 10%;
  height: 40px;
  margin: 4px;
`;

const LogoBox = styled.div`
  width: 10%;
  height: 40px;
  margin: 4px;
`;

export const StyledTitle = styled.h1`
  margin: 5px 0px 5px 0px;
  display: block;
  font-size: 2em;
  font-family: 'Raleway', sans-serif;
  /* text-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25); */
`;

export function Header({ title }) {
  return (
    <HeaderBox>
      {/* menu */}
      <MenuBox />
      <StyledTitle>{title}</StyledTitle>
      {/* logo */}
      <LogoBox />
    </HeaderBox>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

Header.defaultProps = {
  title: 'Enter Title Here'
};
