import styled from 'styled-components';
import { CloseButtonWrapperProps } from './types';

export const CloseButtonWrapper = styled.span<CloseButtonWrapperProps>`
    float: right;
    color: ${props => props.themeColor};
    :hover {
      cursor: pointer;
    }
`;
