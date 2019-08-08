import React from 'react';
import styled from 'styled-components';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { withRouter } from 'react-router-dom';
import { Header } from '../components/Header';

const Description = styled.p`
  text-align: justify;
  font-size: 14px;
  max-width: 400px;
  padding: 48px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
`;

export const Landing = withRouter(function({ history, onAddClick }) {
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
        <br /> this app let's you quickly call a dedicated frist responder. In the future you can
        file and view first aid reports here too!
      </Description>
      <ButtonGroup>
        <a href="tel:01234567890">
          <Button type="phone" />
        </a>
        <div onClick={handleOnAddClick}>
          <Button type="plus" />
        </div>
      </ButtonGroup>
    </>
  );
});
