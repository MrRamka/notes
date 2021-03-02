import React, { FC, useContext } from 'react';
import { TextAreaType } from './types';
import { ThemeTypography } from '../ThemeTypography';
import { StyledLabel, StyledTextArea } from './styles';
import { ThemeContext } from '../../theme-context';

export const TextArea: FC<TextAreaType> = (props) => {

    const { onChange, name, label, rules, value = '' } = props;

    const themeContext = useContext(ThemeContext);

    return (
        <>
            <StyledLabel
                htmlFor={name}
                color={themeContext.theme.primary}
            >
                <ThemeTypography>{label}</ThemeTypography>
            </StyledLabel>
            <StyledTextArea
                defaultValue={value}
                onChange={onChange}
                borderColor={themeContext.theme.on_surface}
                backgroundcolor={themeContext.theme.surface}
                color={themeContext.theme.on_surface}
                rowsMin={2}
            />
        </>
    );
};
