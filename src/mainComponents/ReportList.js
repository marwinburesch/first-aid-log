import React from 'react';
import { List } from '../components/List';
import { ViewReport } from '../components/ViewReport';
import { withRouter } from 'react-router-dom';
import { Header } from '../components/Header';

export const ReportList = withRouter(function({ reports, history, location }) {
  const selectedReport =
    location.hash && reports.find(report => report._id === location.hash.replace('#', ''));

  function handleSelect(report) {
    history.push(`/#${report._id}`);
  }

  return (
    <>
      <Header title="List of Reports" />
      <List reports={reports} onSelect={handleSelect} />

      {selectedReport && <ViewReport report={selectedReport} onClose={() => history.push('/')} />}
    </>
  );
});
