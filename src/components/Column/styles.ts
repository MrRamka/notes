import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { ThemeTypography } from '../ThemeTypography';
import { ColumnPaperProps, DeleteIconProps } from './types';
import DeleteIcon from '@material-ui/icons/Delete';

export const ColumnPaper = styled(Paper)<ColumnPaperProps>`
  padding: 1rem;
  background-color: ${props => props.bgColor};
`;

export const ColumnWrapper = styled.div`
  flex-shrink: 0;
  margin: 0 0.7rem;
  width: 300px;
`;

export const ColumnTitle = styled(ThemeTypography)`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

export const ThemeDeleteIcon = styled(DeleteIcon)<DeleteIconProps>`
  color: ${props => props.delete_color};
  cursor: pointer;
`;

export const HeaderWrapper = styled.div`
  display: flex; 
  justify-content: space-between;
`;
