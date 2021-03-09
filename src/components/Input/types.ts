import React, { ChangeEvent } from 'react';

//todo: reactor
export type InputType = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    label: React.ReactNode;
    rules?: RuleType[];
    value?: string;
    required?: boolean
    hasErrors: boolean;
    setHasErrors: (value: boolean) => void;
}

export type TextAreaType = {
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    name: string;
    label: React.ReactNode;
    rules?: RuleType[];
    value?: string;
}

export type InputStylesType = {
    borderColor: string;
    backgroundcolor: string;
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
