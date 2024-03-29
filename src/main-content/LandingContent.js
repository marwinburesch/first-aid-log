import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';

const Description = styled.p`
  grid-column: 2;
  justify-self: center;
  text-align: justify;
  font-size: 14px;
  max-width: 400px;
  margin: 48px 0px 48px 0px;
`;

const ButtonGroup = styled.div`
  grid-column: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 48px 0px 48px 0px;
`;

export const LandingContent = withRouter(function({ history, onAddClick }) {
  function handleOnAddClick() {
    onAddClick(true);
  }

  return (
    <>
      <Header title="First Aid Log" />
      <Logo height="80px" width="100px" fill="#f5a099" />
      <Description>
        Welcome to First Aid Log,
        <br />
        <br /> this app let's you quickly call a dedicated frist responder. You can also file and
        view first aid reports! Amazing.
      </Description>
      <ButtonGroup>
        <a href="tel:01234567890">
          <Button type="phone" />
        </a>
        <Button onClick={handleOnAddClick} type="plus" />
      </ButtonGroup>
    </>
  );
});
