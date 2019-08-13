import React, { useState } from 'react';
import { List } from '../components/List';
import { ViewReport } from '../components/ViewReport';
import { withRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import { Search } from '../components/Search';

export const ReportList = withRouter(function({ reports, history, location }) {
  const [newReports, setNewReports] = useState(reports);
  const selectedReport =
    location.hash && newReports.find(report => report._id === location.hash.replace('#', ''));

  function handleSelect(report) {
    history.push(`/#${report._id}`);
  }

  function handleSearch(value) {
    const filteredReport = reports.filter(report => report.nameInjured.includes(value));
    setNewReports(filteredReport);
  }

  return (
    <>
      <Header title="List of Reports" />
      <Search onSearch={handleSearch} reports={reports} />
      <List reports={newReports} onSelect={handleSelect} />

      {selectedReport && <ViewReport report={selectedReport} onClose={() => history.push('/')} />}
    </>
  );
});
