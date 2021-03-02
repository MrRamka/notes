import React, { FC, useCallback } from 'react';
import { CardFormProps } from './types';
import { Input, TextArea } from '../Input';

export const CardForm: FC<CardFormProps> = (props) => {

    const { onInputChange, onDescriptionChange, titleLabel = 'Title', descriptionLabel = 'Description', onOk, descriptionValue, titleValue } = props;

    // input functions

    const onOkFunction = useCallback(() => {
        onOk?.();
    }, [onOk]);


    return (
        <>
            <Input onChange={onInputChange} name='title' label={titleLabel} value={titleValue}/>
            {
                //<Input onChange={onDescriptionChange} name='description' label={descriptionLabel} value={descriptionValue} />
            }
            <TextArea onChange={onDescriptionChange}  name='description' label={descriptionLabel} value={descriptionValue}/>
        </>
    );
};
