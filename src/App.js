import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { Landing } from './pages/Landing';
import { ReportList } from './pages/ReportList';
import { FileReport } from './pages/FileReport';
import { getReportsFromStorage, setReportsToStorage } from './utils/storage.js';

export const Grid = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  margin: 0px;
`;

function App() {
  const [reports, setReports] = useState(getReportsFromStorage());

  useEffect(() => {
    getReportsFromStorage();
  }, [reports]);

  function handleOnSubmit(report) {
    console.log(report);

    setReportsToStorage([report, ...reports]);
  }

  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route
            path="/file"
            render={props => <FileReport onSubmitReport={handleOnSubmit} {...props} />}
          />
          <Route path="/rep" render={props => <ReportList reports={reports} {...props} />} />
          <Route path="/" render={props => <Landing {...props} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
