import styled from 'styled-components';

export const MainContent = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(10%, auto) minmax(auto, 610px) minmax(10%, auto);
  align-items: center;
  overflow: auto;
  color: #fff;
  position: relative;
  @media (max-width: 560px) {
    grid-template-columns: minmax(6%, auto) minmax(auto, 610px) minmax(6%, auto);
  }
`;
