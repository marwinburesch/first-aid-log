import React, { useState } from 'react';
import { List } from '../components/List';
import { ViewReport } from '../components/ViewReport';
import { withRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import { Search } from '../components/Search';

export const ReportList = withRouter(function({ reports, history, location }) {
  const [searchValue, setSearchValue] = useState('');

  const filteredReports = reports.filter(
    report =>
      report.nameInjured.toLowerCase().includes(searchValue.toLowerCase()) ||
      report.registered.includes(searchValue)
  );

  const selectedReport =
    location.hash && filteredReports.find(report => report._id === location.hash.replace('#', ''));

  function handleSelect(report) {
    history.push(`/#${report._id}`);
  }

  function handleSearch(value) {
    setSearchValue(value);
  }

  return (
    <>
      <Header title="List of Reports" />
      <Search onSearch={handleSearch} />
      <List reports={filteredReports} onSelect={handleSelect} />

      {selectedReport && <ViewReport report={selectedReport} onClose={() => history.push('/')} />}
    </>
  );
});
