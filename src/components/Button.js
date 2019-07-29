import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ActionButton = styled.button`
  background-color: #fff;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: none;
  box-shadow: inset 0px 0px 15px dimgray;
  transition: all 0.2s;
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

export function Button({ firstResponse, fill, ...props }) {
  return (
    <>
      <scene>
        <a href={firstResponse}>
          <ActionButton {...props}>
            <svg width="75px" aria-hidden="true" focusable="false" role="img" viewBox="0 0 512 512">
              <path
                fill={fill}
                d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
              />
            </svg>
          </ActionButton>
        </a>
      </scene>
    </>
  );
}

Button.propTypes = {
  firstResponse: PropTypes.string.isRequired,
  fill: PropTypes.string
};

Button.defaultProps = {
  fill: '#59B375'
};
