import React from 'react';
import styled from 'styled-components';

const Searchbar = styled.input``;

export function Search({ onSearch }) {
  function handleFilter(event) {
    const value = event.target.value;
    onSearch(value);
  }

  return (
    <>
      <div>
        <Searchbar placeholder="filter" onChange={handleFilter} />
      </div>
    </>
  );
}
