import styled from 'styled-components';
import { Card as MaterialCard, CardContent as MaterialCardContent } from '@material-ui/core';
import { CardStylesProps } from './types';
import { ThemeTypography } from '../ThemeTypography';
import ClearIcon from '@material-ui/icons/Clear';
import { DeleteIconProps } from '../Column/types';

export const Card = styled(MaterialCard)<CardStylesProps>`
  background-color: ${props => props.themecolor};
  cursor: pointer;
`;

export const CardTitle = styled(ThemeTypography)`
  display: block;
`;

export const CardContent = styled(MaterialCardContent)`
  width: 240px;
`;

export const ThemeCardTypography = styled(ThemeTypography)`
  word-break: break-all;
`;

export const ThemeDeleteIcon = styled(ClearIcon)<DeleteIconProps>`
  color: ${props => props.delete_color};
  cursor: pointer;
`;

export const DeleteCardWrapper = styled.div`
  float: right;
  padding: 0.2rem;
`;
