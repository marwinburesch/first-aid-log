import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const ReportBoxIndex = styled.div`
  width: 22px;
  height: 22px;
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 50%;
  border: solid 1px #fff;
  background-color: #96d2e3;
  position: absolute;
  top: -10px;
  left: -11px;
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-400px);
    visibility: hidden;
  }

  to {
    transform: translateX(0);
    visibility: visible;
  }
`;

const ReportBox = styled.div`
  width: 85%;
  height: 48px;
  min-height: 48px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #fff;
  border-radius: 10px;
  font-size: 14px;
  text-align: center;
  margin: 0px 3% 20px 3%;
  border: solid #fff 1px;
  background: transparent;
  box-sizing: border-box;
  box-shadow: 0px 4px 0px #fff;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  animation-name: ${slideInLeft} 2s;
  &:hover {
    background: linear-gradient(to bottom, transparent 0%, rgba(233, 228, 226, 0.5) 100%);
    transform: translateY(3px);
    box-shadow: 0px 0px 0px #fff;
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

export function ListItem({ report, onSelect }) {
  function handleOpen() {
    onSelect(report);
  }

  return (
    <>
      <ReportBox onClick={handleOpen}>
        <ReportBoxIndex>{report.index}</ReportBoxIndex>
        <DateBox>{report.registered}</DateBox>
        <TextBox>{report.nameInjured}</TextBox>
      </ReportBox>
    </>
  );
}

ListItem.propTypes = {
  onSelect: PropTypes.func.isRequired,
  report: PropTypes.object
};
