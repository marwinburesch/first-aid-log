import styled from 'styled-components';

export const MainContent = styled.div.attrs(props => ({
  background: props.background || 'blue'
}))`
  background: ${props => props.background};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 68px 48px 20px 48px;
  overflow: auto;
`;
