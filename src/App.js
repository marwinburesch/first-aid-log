import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainContent } from './components/MainContent';
import GlobalStyles from './GlobalStyles';
import { FileReport } from './main-content/FileReport';
import { LandingContent } from './main-content/LandingContent';
import { ListContent } from './main-content/ListContent';
import SiteContainer from './SiteContainer';
import { getReportsFromStorage, setReportsToStorage } from './utils/storage.js';
import { FirstAidKitList } from './main-content/FirstAidKitList';
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
          <LandingContent onAddClick={handleAddClick} />
          <ListContent data={reports} />
          {/* <FirstAidKitList kits={kits} /> */}
          <ListContent data={kits} />
          {showAdd && (
            <FileReport onSubmitReport={handleOnSubmit} onClose={() => setShowAdd(null)} />
          )}
        </MainContent>
      </SiteContainer>
    </Router>
  );
}

export default App;
