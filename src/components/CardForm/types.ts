import { ChangeEvent } from 'react';

export type CardFormProps = {
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onDescriptionChange: (event: ChangeEvent<HTMLInputElement>) => void;
    titleLabel?: string;
    descriptionLabel?: string;
    onOk?: () => void;
    titleValue?: string;
    descriptionValue?: string;
}
