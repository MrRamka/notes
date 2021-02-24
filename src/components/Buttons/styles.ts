import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { ButtonStyleProps } from './types';

export const StyledButton = styled(Button)<ButtonStyleProps>`
  color: ${props => props.themeColor};
  border-color: ${props => props.themeColor};
  margin: 0.2rem;
`;
