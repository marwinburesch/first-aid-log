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
  color: #000;
  border-radius: 50%;
  border: solid 1px #fff;
  background-color: #c1b1aa;
  position: absolute;
  top: -10px;
  left: -11px;
`;

const slideInLeft = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const ReportBox = styled.div`
  width: 90%;
  /* max-width: 400px; */
  height: 48px;
  min-height: 48px;
  margin-bottom: 20px;
  margin-left: 10%;
  display: flex;
  align-items: center;
  color: #fff;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  font-size: 14px;
  text-align: center;
  border: solid #fff 1px;
  border-right: none;
  background: transparent;
  box-sizing: border-box;
  box-shadow: 0px 4px 0px #fff;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  animation-name: ${slideInLeft};
  &:hover {
    background: linear-gradient(to bottom, transparent 0%, rgba(233, 228, 226, 0.5) 100%);
    transform: scale(1.03);
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
        <DateBox>
          {/* <TextSubtitle>Date</TextSubtitle> */}
          {report.registered}
        </DateBox>
        <TextBox>
          {/* <TextSubtitle>Name</TextSubtitle> */}
          {report.nameInjured}
        </TextBox>
      </ReportBox>
    </>
  );
}

ListItem.propTypes = {
  onSelect: PropTypes.func.isRequired,
  report: PropTypes.object
};
