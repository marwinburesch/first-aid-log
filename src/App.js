import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import { Landing } from './pages/Landing';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 48px repeat(5, auto) 48px;
  grid-template-rows: 48px 20px auto 20px;
  justify-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 2 / 7;
  grid-row: 3 / 4;
`;

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Grid>
          {/* menu */}
          <Switch>
            <Route path="/" render={props => <Landing {...props} />} />
          </Switch>
        </Grid>
      </Router>
    </>
  );
}

export default App;
