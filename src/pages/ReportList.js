import React from 'react';
import { Header } from '../components/Header';
// import { Logo } from '../components/Logo';
import { MainContent } from '../components/MainContent';
import { List } from '../components/List';
import { Grid } from '../App';
import { ViewReport } from '../components/ViewReport';

export function ReportList({ ...props }) {
  const [selectedReport, setSelectedReport] = React.useState(null);

  function handleSelect(report) {
    setSelectedReport(report);
  }

  return (
    <Grid>
      <Header title="Report List" {...props} />
      <MainContent background="linear-gradient(to bottom, #ffffff 0%,#f8f2ec 100%)">
        <List onSelect={handleSelect} />
      </MainContent>

      {selectedReport && (
        <ViewReport report={selectedReport} onClose={() => setSelectedReport(null)} />
      )}
    </Grid>
  );
}
