import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import { KitList } from '../components/KitList';
import { Search } from '../components/Search';
import { ViewKit } from '../components/ViewKit';

export const FirstAidKitList = withRouter(function({ kits, history, location }) {
  const [searchValue, setSearchValue] = useState('');

  const filteredKits = kits.filter(
    kit =>
      kit.location.toLowerCase().includes(searchValue.toLowerCase()) ||
      kit.lastUsed.includes(searchValue)
  );

  const selectedKit =
    location.hash && filteredKits.find(kit => kit._id === location.hash.replace('#', ''));

  function handleSelect(kit) {
    history.push(`/#${kit._id}`);
  }

  function handleSearch(value) {
    setSearchValue(value);
  }

  return (
    <>
      <Header title="First Aid Kits" />
      <Search onSearch={handleSearch} />
      <KitList kits={filteredKits} onSelect={handleSelect} />

      {selectedKit && <ViewKit kit={selectedKit} onClose={() => history.push('/')} />}
    </>
  );
});
