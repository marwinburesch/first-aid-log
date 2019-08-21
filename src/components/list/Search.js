import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from '../Button';

const searchSlide = keyframes`
  from {
    width: 0;
    opacity: 0;
    }
  to {
    width: 50%;
    opacity: 1;
    }
`;

const SearchBox = styled.div`
  height: 40px;
  width: 100%;
  grid-column: 2 / 3;
  align-self: flex-end;
  margin-bottom: 15px;
  margin-top: ${props => props.marginTop};
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  transition: all 0.1s;
`;

const SearchInput = styled.input`
  position: absolute;
  z-index: 0;
  width: 50%;
  height: 20px;
  padding: 10px;
  border: solid 1px #fff;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  background-color: transparent;
  animation: ${searchSlide} 0.5s ease;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export function Search({ onSearch }) {
  const [show, setShow] = useState(null);

  function handleFilter(event) {
    const { value } = event.target;
    onSearch(value);
  }

  function toggleMargin(m) {
    return m ? '0px' : '-50px';
  }

  function handleClick() {
    setShow(!show);
  }

  return (
    <SearchBox marginTop={toggleMargin(show)}>
      {show && <SearchInput placeholder="filter" onChange={handleFilter} />}
      <Button
        onClick={handleClick}
        ani="none"
        type="search"
        width="40px"
        margin="0px"
        transform="scale(1)"
        boxShadow="0px"
      />
    </SearchBox>
  );
}
