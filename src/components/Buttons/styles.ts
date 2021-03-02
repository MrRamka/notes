import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { ButtonStyleProps } from './types';

export const StyledButton = styled(Button)<ButtonStyleProps>`
  color: ${props => props.themecolor};
  border-color: ${props => props.themecolor};
  margin: 0.2rem;
`;
