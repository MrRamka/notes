import React, { ChangeEvent, FC, useCallback, useContext, useEffect, useState } from 'react';
import { ErrorLabel, StyledInput, StyledLabel, Wrapper } from './styles';
import { InputType } from './types';
import { ThemeContext } from '../../theme-context';
import { ThemeTypography } from '../ThemeTypography';
import { useTranslation } from 'react-i18next';

const INPUT_SIZE = 35;

export const Input: FC<InputType> = (props) => {

    const { onChange, name, label, value = '', required = false, hasErrors, setHasErrors } = props;
    const { t } = useTranslation();
    const [errors, setErrors] = useState<string[]>([]);

    useEffect(() => {
        if (value.length === 0) {
            setHasErrors(true);
        }
    }, [value, setHasErrors]);

    const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const changedValue = event.target.value;
        //Rules
        if (required && changedValue.length === 0) {
            setHasErrors(true);
            setErrors([t('required')]);
        } else {
            setErrors([]);
            setHasErrors(false);
            onChange(event);
        }
    }, [onChange, required, setHasErrors, t, setErrors]);

    const themeContext = useContext(ThemeContext);

    const borderColor = hasErrors ? themeContext.theme.error : themeContext.theme.on_surface;

    return (
        <Wrapper>
            <StyledLabel
                htmlFor={name}
                color={themeContext.theme.primary}
            >
                <ThemeTypography>{label}</ThemeTypography>
            </StyledLabel>
            <StyledInput
                borderColor={borderColor}
                backgroundcolor={themeContext.theme.surface}
                color={themeContext.theme.on_surface}
                name={name}
                onChange={handleInputChange}
                defaultValue={value}
                size={INPUT_SIZE}
                required={required}
            />
            {
                errors ? errors.map((error, idx) => <ErrorLabel key={idx}
                                                                color={themeContext.theme.error}>{error}</ErrorLabel>) : <></>
            }
        </Wrapper>
    );
};
