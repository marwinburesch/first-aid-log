import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
// import { Logo } from '../components/Logo';
import { MainContent } from '../components/MainContent';
import { List } from '../components/List';
import { Grid } from '../App';

export function ReportList({ ...props }) {
  return (
    <Grid>
      <Header title="Report List" {...props} />
      <MainContent background="linear-gradient(to bottom, #ffffff 0%,#f8f2ec 100%)">
        <List />
      </MainContent>
    </Grid>
  );
}
