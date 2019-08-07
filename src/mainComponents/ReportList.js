import React from 'react';
import { List } from '../components/List';
import { ViewReport } from '../components/ViewReport';
import { withRouter } from 'react-router-dom';
import { Header } from '../components/Header';

export const ReportList = withRouter(function({ reports, history }) {
  const [selectedReport, setSelectedReport] = React.useState(null);

  function handleSelect(report) {
    setSelectedReport(report);
  }

  return (
    <>
      <Header title="List of Reports" />
      <List reports={reports} onSelect={handleSelect} />

      {selectedReport && (
        <ViewReport report={selectedReport} onClose={() => setSelectedReport(null)} />
      )}
    </>
  );
});
