import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ReportBoxIndex = styled.div`
  width: 22px;
  height: 22px;
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #54b6d2;
  position: absolute;
  top: -1px;
  left: -11px;
`;

const ReportBox = styled.div.attrs(props => ({
  background: props.background || 'transparent'
}))`
  width: 100%;
  max-width: 400px;
  height: 48px;
  min-height: 48px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;

  border-radius: 24px;
  font-size: 12px;
  text-align: center;
  border: solid #54b6d2 1px;
  background: transparent;
  border: 1px solid #54b6d2;
  box-sizing: border-box;
  box-shadow: 0px 3px 0px #54b6d2;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: linear-gradient(to right, #f8f2ec 0%, #54b6d2 100%);
    box-shadow: 0px 0px 0px;
    transform: translateY(3px);
  }
`;

const DateBox = styled.div`
  position: relative;
  width: 30%;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  justify-self: flex-start;
`;

const TextBox = styled.div`
  position: relative;
  width: 70%;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TextSubtitle = styled.div`
  position: absolute;
  width: 100%;
  top: 1.4em;
  font-size: 11px;
  color: #a3a3a3;
`;

export function ListItem({ report, onSelect }) {
  function handleOpen() {
    onSelect(report);
  }

  return (
    <>
      <ReportBox onClick={handleOpen}>
        <ReportBoxIndex>{report.index}</ReportBoxIndex>
        <DateBox>
          <TextSubtitle>Date</TextSubtitle>
          {report.registered}
        </DateBox>
        <TextBox>
          <TextSubtitle>Name</TextSubtitle>
          {report.nameInjured}
        </TextBox>
      </ReportBox>
    </>
  );
}
