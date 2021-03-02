import styled from 'styled-components';

type Props = {
    bgcolor: string
}

export const PageWrapper = styled.div<Props>`
  position: fixed;
  overflow: auto;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.bgcolor};
`;
