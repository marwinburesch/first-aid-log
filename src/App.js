import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainContent } from './components/MainContent';
import GlobalStyles from './GlobalStyles';
import { FileReport } from './main-components/FileReport';
import { Landing } from './main-components/Landing';
import { ReportList } from './main-components/ReportList';
import SiteContainer from './SiteContainer';
import { getReportsFromStorage, setReportsToStorage } from './utils/storage.js';
import { FirstAidKitList } from './main-components/FirstAidKitList';
import kits from './utils/__mockKits.json';

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
          <FirstAidKitList kits={kits} />
        </MainContent>
      </SiteContainer>
    </Router>
  );
}

export default App;
