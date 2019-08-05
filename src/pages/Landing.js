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

const ActionButton = styled.button`
  background-color: #fff;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: none;
  box-shadow: inset 0px 0px 15px dimgray;
  transition: all 0.2s;
  margin: 10px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:active {
    border: none;
    box-shadow: inset 0px 0px 8px dimgray;
    transform: translateZ(-5px);
  }
`;

export function Landing({ history, ...props }) {
  function handleAddClick() {
    history.push('/file');
  }

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
        <ActionButton onClick={handleAddClick}>
          <svg width="37.5px" aria-hidden="true" role="img" viewBox="0 0 448 512">
            <path
              fill="#59B375"
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            />
          </svg>
        </ActionButton>
      </MainContent>
    </Grid>
  );
}
