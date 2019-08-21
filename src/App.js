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

function App() {
  const [reports, setReports] = useState(getReportsFromStorage());
  const [kits, setKits] = useState(getKitsFromStorage());
  const [showAdd, setShowAdd] = useState(false);

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
    setShowAdd(false);
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
            <FileReport
              kits={kits}
              onSubmitReport={handleOnSubmit}
              onClose={() => setShowAdd(false)}
            />
          )}
        </MainContent>
      </SiteContainer>
    </Router>
  );
}

export default App;
