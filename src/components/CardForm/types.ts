import { ChangeEvent } from 'react';

export type CardFormProps = {
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onDescriptionChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    titleLabel?: string;
    descriptionLabel?: string;
    onOk?: () => void;
    titleValue?: string;
    descriptionValue?: string;
}
