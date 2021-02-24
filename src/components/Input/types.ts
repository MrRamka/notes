import React, { ChangeEvent } from 'react';

export type InputType = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    label: React.ReactNode;
    rules?: RuleType[];
}

export type InputStylesType = {
    borderColor: string;
    backgroundColor: string;
    color: string;
}

export  type LabelStylesType = {
    color: string;
}

export type RuleType = {
    message: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
}
