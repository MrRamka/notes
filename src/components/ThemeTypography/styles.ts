import styled from 'styled-components';
import { Typography } from '@material-ui/core';

type Props = {
    text_color: string
}

export const StyledTypography = styled(Typography)<Props>`
  color: ${props => props.text_color};
  display: inline-block;
`;
