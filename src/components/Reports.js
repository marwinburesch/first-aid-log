import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ReportBoxShadow = styled.div``;

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
  }
`;

// linear-gradient(to right, #f8f2ec 0%, #54b6d2 100%)

export function RenderReportBox({ report }) {
  function handleReportClick() {
    return console.log(report);
  }

  return (
    <ReportBox onClick={handleReportClick}>
      <ReportBoxIndex>{report.index}</ReportBoxIndex>
      {report.registered} {report.nameInjured}
    </ReportBox>
  );
}
