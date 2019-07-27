import React from 'react';
import styled from 'styled-components';
import { Title } from '../components/Title';
import { Logo } from '../components/Logo';
import { MainContent } from '../App';

const Description = styled.p`
  text-align: center;
  font-size: 14px;
`;

export function Landing({ ...props }) {
  return (
    <>
      <Title text="First Aid Log" {...props} />
      <MainContent>
        <Logo height="75px" width="75px" fill="#59B375" />
        <Description>
          Welcome to First Aid Log,
          <br />
          <br /> this app let's you quickly call a dedicated frist responder. In the future you can
          file and view first aid reports here too!
        </Description>
      </MainContent>
    </>
  );
}
