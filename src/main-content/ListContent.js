import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import { List } from '../components/list/List';
import { Search } from '../components/Search';
import { ViewItem } from '../components/list/ViewItem';

export const ListContent = withRouter(function({ data, history, location, title }) {
  const [searchValue, setSearchValue] = useState('');

  const filteredData = data.filter(
    item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()) || item.date.includes(searchValue)
  );

  const selectedItem =
    location.hash && filteredData.find(item => item._id === location.hash.replace('#', ''));

  function handleSelect(item) {
    history.push(`/#${item._id}`);
  }

  function handleSearch(value) {
    setSearchValue(value);
  }

  return (
    <>
      <Header title={title} />
      <Search onSearch={handleSearch} />
      <List data={filteredData} onSelect={handleSelect} />

      {selectedItem && <ViewItem item={selectedItem} onClose={() => history.push('/')} />}
    </>
  );
});
