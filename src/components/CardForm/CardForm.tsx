import React, { FC, useCallback } from 'react';
import { CardFormProps } from './types';
import { Input, TextArea } from '../Input';
import { useTranslation } from 'react-i18next';

export const CardForm: FC<CardFormProps> = (props) => {

    const { t } = useTranslation();

    const { onInputChange,
        onDescriptionChange,
        titleLabel = t('cardTitle'),
        descriptionLabel = t('cardDescription'),
        onOk,
        descriptionValue,
        titleValue
    } = props;

    const onOkFunction = useCallback(() => {
        onOk?.();
    }, [onOk]);


    return (
        <>
            <Input onChange={onInputChange} name='title' label={titleLabel} value={titleValue}/>
            <TextArea onChange={onDescriptionChange}  name='description' label={descriptionLabel} value={descriptionValue}/>
        </>
    );
};
