import React, { CSSProperties, FC, useContext } from 'react';
import { StyledTypography } from './styles';
import { ThemeContext } from '../../theme-context';

type ThemeTypographyProps = {
    className?: string
    styles?: CSSProperties
}

export const ThemeTypography: FC<ThemeTypographyProps> = ({ children, className, styles }) => {

    const context = useContext(ThemeContext);

    return (
        <StyledTypography text_color={context.theme.on_surface} className={className} style={styles}>
            {children}
        </StyledTypography>
    );
};
