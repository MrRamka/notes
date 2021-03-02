import React, { ChangeEvent, FC, useCallback, useContext } from 'react';
import { StyledInput, StyledLabel, Wrapper } from './styles';
import { InputType } from './types';
import { ThemeContext } from '../../theme-context';
import { ThemeTypography } from '../ThemeTypography';

const INPUT_SIZE = 35;

export const Input: FC<InputType> = (props) => {

    const { onChange, name, label, rules, value = '' } = props;


    const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange(event);

        //Rules

    }, [onChange]);

    const themeContext = useContext(ThemeContext);

    return (
        <Wrapper>
            <StyledLabel
                htmlFor={name}
                color={themeContext.theme.primary}
            >
                <ThemeTypography>{label}</ThemeTypography>
            </StyledLabel>
            <StyledInput
                borderColor={themeContext.theme.on_surface}
                backgroundcolor={themeContext.theme.surface}
                color={themeContext.theme.on_surface}
                name={name}
                onChange={handleInputChange}
                defaultValue={value}
                size={INPUT_SIZE}
            />
        </Wrapper>
    );
};
