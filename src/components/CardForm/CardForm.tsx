import React, { FC, useCallback } from 'react';
import { CardFormProps } from './types';
import { Input, TextArea } from '../Input';
import { useTranslation } from 'react-i18next';

export const CardForm: FC<CardFormProps> = (props) => {

    const { t } = useTranslation();

    const {
        onInputChange,
        onDescriptionChange,
        titleLabel = t('cardTitle'),
        descriptionLabel = t('cardDescription'),
        onOk,
        descriptionValue,
        titleValue,
        hasErrors,
        setHasErrors,
    } = props;

    const onOkFunction = useCallback(() => {
        if (!hasErrors) {
            onOk?.();
        }
    }, [onOk, hasErrors]);


    return (
        <>
            <Input onChange={onInputChange}
                   name='title'
                   label={titleLabel}
                   value={titleValue}
                   hasErrors={hasErrors}
                   setHasErrors={setHasErrors}
                   required
            />
            <TextArea
                onChange={onDescriptionChange}
                name='description'
                label={descriptionLabel}
                value={descriptionValue}
            />
        </>
    );
};
