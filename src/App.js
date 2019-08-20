import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainContent } from './components/MainContent';
import GlobalStyles from './GlobalStyles';
import { FileReport } from './main-content/FileReport';
import { LandingContent } from './main-content/LandingContent';
import { ListContent } from './main-content/ListContent';
import SiteContainer from './components/SiteContainer';
import {
  getReportsFromStorage,
  setReportsToStorage,
  getKitsFromStorage,
  setKitsToStorage
} from './utils/storage.js';
// import kits from './utils/__mockKits.json';

function App() {
  const [reports, setReports] = useState(getReportsFromStorage());
  const [kits, setKits] = useState(getKitsFromStorage());
  const [showAdd, setShowAdd] = useState(null);

  useEffect(() => {
    setReportsToStorage(reports);
  }, [reports]);

  useEffect(() => {
    setKitsToStorage(kits);
  }, [kits]);

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
          <ListContent title="Reports" data={reports} />
          <ListContent title="First Aid Kits" data={kits} />
          {showAdd && (
            <FileReport onSubmitReport={handleOnSubmit} onClose={() => setShowAdd(null)} />
          )}
        </MainContent>
      </SiteContainer>
    </Router>
  );
}

export default App;
