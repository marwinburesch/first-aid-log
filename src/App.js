import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { Landing } from './mainComponents/Landing';
import { ReportList } from './mainComponents/ReportList';
import { FileReport } from './mainComponents/FileReport';
import { getReportsFromStorage, setReportsToStorage } from './utils/storage.js';
import { MainContent } from './components/MainContent';
import SiteContainer from './SiteContainer';

function App() {
  const [reports, setReports] = useState(getReportsFromStorage());
  const [showAdd, setShowAdd] = useState(null);

  useEffect(() => {
    setReportsToStorage(reports);
  }, [reports]);

  function handleAddClick(show) {
    setShowAdd(show);
  }

  function handleOnSubmit(report) {
    setReports([report, ...reports]);
    setShowAdd(null);
  }

  return (
    <Router>
      <GlobalStyles />
      <SiteContainer>
        <MainContent>
          <Landing onAddClick={handleAddClick} />
          <ReportList reports={reports} />
          {showAdd && (
            <FileReport onSubmitReport={handleOnSubmit} onClose={() => setShowAdd(null)} />
          )}
        </MainContent>
      </SiteContainer>
    </Router>
  );
}

export default App;
