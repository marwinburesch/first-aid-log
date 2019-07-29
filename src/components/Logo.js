import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export function Logo({ height, width, fill }) {
  return (
    <>
      <LogoContainer height={height} width={width}>
        {/* <img alt="first-aid-logo" src="first-aid-solid.svg" /> */}
        <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 576 512">
          <path
            fill={fill}
            d="M0 80v352c0 26.5 21.5 48 48 48h48V32H48C21.5 32 0 53.5 0 80zm128 400h320V32H128v448zm64-248c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48zM528 32h-48v448h48c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"
          />
        </svg>
      </LogoContainer>
    </>
  );
}

Logo.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired
};

Logo.defaultProps = {
  height: '50px',
  width: '50px',
  fill: '#EC3D2A'
};