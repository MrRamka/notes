import React, { FC, useCallback, useContext } from 'react';
import { CloseButtonProps } from './types';
import CloseIcon from '@material-ui/icons/Close';
import { CloseButtonWrapper } from './styles';
import { ThemeContext } from '../../theme-context';

export const CloseButton: FC<CloseButtonProps> = ({ onClick}) => {

    const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
        onClick?.(e);
    }, [onClick])

    const theme = useContext(ThemeContext)

    return (
        <CloseButtonWrapper onClick={handleClick} themeColor={theme.theme.on_surface}>
            <CloseIcon />
        </CloseButtonWrapper>
    );
}
