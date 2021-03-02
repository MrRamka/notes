import styled from 'styled-components';
import { AppBar } from '@material-ui/core';
import { AppHeaderBarProps, AutoThemeCheckBoxProps } from './types';
import { Checkbox } from '@material-ui/core';

export const AppHeaderBar = styled(AppBar)<AppHeaderBarProps>`
  background-color: ${props => props.bgColor};
`;

export const AutoThemeCheckBox = styled(Checkbox)<AutoThemeCheckBoxProps>`
  color: ${props => props.bgColor};
`;


