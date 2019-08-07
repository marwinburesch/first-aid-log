import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { Landing } from './mainComponents/Landing';
import { ReportList } from './mainComponents/ReportList';
import { FileReport } from './mainComponents/FileReport';
import { getReportsFromStorage, setReportsToStorage } from './utils/storage.js';
import { MainContent } from './components/MainContent';

export const Grid = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  margin: 0px;
`;

function App() {
  const [reports, setReports] = useState(getReportsFromStorage());
  const [showAdd, setShowAdd] = useState(null);

  // useEffect(() => {
  //   getReportsFromStorage();
  // }, [reports]);

  function handleAddClick(show) {
    setShowAdd(show);
  }

  function handleOnSubmit(report) {
    setReportsToStorage([report, ...reports]);
    setReports(getReportsFromStorage());
    setShowAdd(null);
  }

  return (
    <Router>
      <GlobalStyles />
      <Grid>
        <MainContent>
          <Landing onAddClick={handleAddClick} />
          <ReportList reports={reports} />
          {showAdd && (
            <FileReport onSubmitReport={handleOnSubmit} onClose={() => setShowAdd(null)} />
          )}
        </MainContent>
      </Grid>
    </Router>
  );
}

export default App;
