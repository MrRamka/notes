import styled from 'styled-components';
import { Card as MaterialCard } from '@material-ui/core';
import { CardStylesProps } from './types';
import { ThemeTypography } from '../ThemeTypography';

export const Card = styled(MaterialCard)<CardStylesProps>`
  background-color: ${props => props.themeColor};
`;

export const CardTitle = styled(ThemeTypography)`
  display: block;
`;
