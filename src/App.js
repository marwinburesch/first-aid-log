import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { Landing } from './pages/Landing';
import { ReportList } from './pages/ReportList';

export const Grid = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  margin: 0px;
`;

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        {/* menu */}
        <Switch>
          <Route path="/rep" render={props => <ReportList {...props} />} />
          <Route path="/" render={props => <Landing {...props} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
