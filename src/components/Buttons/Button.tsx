import React, { FC, useCallback, useContext } from 'react';
import { ButtonProps } from './types';
import { StyledButton } from './styles';
import { ThemeContext } from '../../theme-context';

export const Button: FC<ButtonProps> = ({ onClick, children, buttonColor }) => {
    const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
        onClick?.(e);
    }, [onClick]);

    const theme = useContext(ThemeContext);
    const btnColor = buttonColor ?? theme.theme.primary;

    return (
        <>
            <StyledButton
                variant='outlined'
                size='small'
                onClick={handleClick}
                themecolor={btnColor}
            >
                {children}
            </StyledButton>
        </>
    );
};
