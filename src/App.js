import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainContent } from './components/MainContent';
import GlobalStyles from './GlobalStyles';
import { FileReport } from './mainComponents/FileReport';
import { Landing } from './mainComponents/Landing';
import { ReportList } from './mainComponents/ReportList';
import SiteContainer from './SiteContainer';
import { getReportsFromStorage, setReportsToStorage } from './utils/storage.js';
import { KitList } from './mainComponents/KitList';

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
