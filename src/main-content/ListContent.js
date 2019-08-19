import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import { List } from '../components/List';
import { Search } from '../components/Search';
import { ViewReport } from '../components/ViewReport';

export const ListContent = withRouter(function({ data, history, location }) {
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

  console.log(data);

  return (
    <>
      <Header title="Reports" />
      <Search onSearch={handleSearch} />
      <List data={filteredData} onSelect={handleSelect} />

      {selectedItem && <ViewReport report={selectedItem} onClose={() => history.push('/')} />}
    </>
  );
});
