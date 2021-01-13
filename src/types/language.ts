import { has } from 'lodash';

export enum LanguageCode {
    ENGLISH = 0,
    RUSSIAN = 1
}

export enum LanguageName {
    ENGLISH = 'English',
    RUSSIAN = 'Russian'
}

export enum LanguageNameShort {
    ENGLISH = 'en',
    RUSSIAN = 'ru'
}

export const languageNameDict = {
    [LanguageCode.ENGLISH]: LanguageName.ENGLISH,
    [LanguageCode.RUSSIAN]: LanguageName.RUSSIAN,
};

export const languageShortNameDict = {
    [LanguageCode.ENGLISH]: LanguageNameShort.ENGLISH,
    [LanguageCode.RUSSIAN]: LanguageNameShort.RUSSIAN,
};


export const LANGUAGES = [LanguageCode.ENGLISH, LanguageCode.RUSSIAN];

export function getLanguageNameByCode(code: LanguageCode): LanguageName | null {
    if (!has(languageNameDict, code)) {
        console.log('Unexpected Language Code');
        return null;
    }
    return languageNameDict[code];
}

export function getLanguageShortNameByCode(code: LanguageCode): LanguageNameShort | null {
    if (!has(languageShortNameDict, code)) {
        console.log('Unexpected Language Code');
        return null;
    }
    return languageShortNameDict[code];
}

