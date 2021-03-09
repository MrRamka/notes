import AutorenewIcon from '@material-ui/icons/Autorenew';
import styled, { keyframes } from 'styled-components';
import { LoadingIconType } from './types';

const keyFrames = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

export const LoadingIcon = styled(AutorenewIcon)<LoadingIconType>`
  
`;
