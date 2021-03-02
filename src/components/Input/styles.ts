import styled from 'styled-components';
import { InputStylesType, LabelStylesType } from './types';
import { TextareaAutosize } from '@material-ui/core';

export const StyledInput = styled.input<InputStylesType>`
  border-color: ${props => props.borderColor};
  background-color: ${props => props.backgroundcolor};
  color: ${props => props.color};
  border-style: solid;
  border-radius: 1px;
  border-width: 1px;
`;

export const StyledTextArea = styled(TextareaAutosize)<InputStylesType>`
  border-color: ${props => props.borderColor};
  background-color: ${props => props.backgroundcolor};
  color: ${props => props.color};
  border-style: solid;
  border-radius: 1px;
  border-width: 1px;
`;

export const StyledLabel = styled.label<LabelStylesType>`
  color: ${props => props.color};
  display: block;
`;

export const Wrapper = styled.div`
  margin-bottom: 1rem;
`;
