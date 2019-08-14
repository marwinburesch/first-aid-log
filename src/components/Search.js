import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from './Button';

const searchSlide = keyframes`
  from {
    width: 0px;
    opacity: 0;
    }
  to {
    width: 40%;
    opacity: 1;
    }
`;

const SearchBox = styled.div`
  height: 40px;
  width: 100%;
  margin-right: 5%;
  align-self: flex-end;
  /* border: solid 1px #fff;
  border-radius: 10px; */
  margin-bottom: 15px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const SearchInput = styled.input`
  position: absolute;
  z-index: 0;
  width: 40%;
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
    const value = event.target.value;
    onSearch(value);
  }

  function handleClick() {
    setShow(!show);
  }

  return (
    <SearchBox>
      {show && <SearchInput placeholder="filter" onChange={handleFilter} />}
      <Button
        onClick={handleClick}
        ani="none"
        type="search"
        width="42px"
        margin="0px"
        transform="scale(1)"
        boxShadow="0px"
      />
    </SearchBox>
  );
}
