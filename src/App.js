import React from 'react';
import { Grid } from './components/Grid';
import { Title } from './components/Title';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Grid>
        <Title text="First Aid Log" />
      </Grid>
    </>
  );
}

export default App;
