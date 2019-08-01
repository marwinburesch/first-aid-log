import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { MainContent } from '../components/MainContent';
import { Button } from '../components/Button';
import { Grid } from '../App';

const Description = styled.p`
  text-align: center;
  font-size: 14px;
`;

export function Landing({ ...props }) {
  return (
    <Grid>
      <Header title="First Aid Log" {...props} />
      <MainContent background="linear-gradient(to bottom, #ffffff 0%,#f8f2ec 100%);">
        <Logo height="75px" width="75px" fill="#59B375" />
        <Description>
          Welcome to First Aid Log,
          <br />
          <br /> this app let's you quickly call a dedicated frist responder. In the future you can
          file and view first aid reports here too!
        </Description>
        <Button firstResponse="tel:01234567890" fill="#59B375" />
      </MainContent>
    </Grid>
  );
}
