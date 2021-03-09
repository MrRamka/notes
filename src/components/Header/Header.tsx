import React, { FC, useCallback, useContext, useState } from 'react';
import {
    createStyles,
    FormControlLabel,
    makeStyles,
    MenuItem,
    Select,
    Switch,
    Theme,
    Toolbar,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { getLanguageNameByCode, getLanguageShortNameByCode, LanguageNameShort, LANGUAGES } from '../../types';
import { ThemeContext } from '../../theme-context';
import { ThemeTypography } from '../ThemeTypography';
import { AppHeaderBar, AutoThemeCheckBox } from './styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            flexGrow: 1,
        },
    }),
);

export const Header: FC = () => {

    const { t, i18n } = useTranslation();
    const classes = useStyles();
    const [currentLanguage, setCurrentLanguage] = useState<LanguageNameShort>(LanguageNameShort.ENGLISH);

    const themeContext = useContext(ThemeContext);

    const onLanguageChange = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
        setCurrentLanguage(event.target.value as LanguageNameShort);
        i18n.changeLanguage(event.target.value as string);
    }, [i18n]);

    const onAutoThemeChange = useCallback(() => {
        themeContext.setAutoThemeChange();
    }, [themeContext]);

    return (

        <AppHeaderBar position='fixed' bgColor={themeContext.theme.surface}>
            <Toolbar>
                <ThemeTypography className={classes.title}>
                    {t('title')}
                </ThemeTypography>

                <FormControlLabel
                    control={<AutoThemeCheckBox name='autoSwitchTheme' bgColor={themeContext.theme.on_surface}
                                                checked={themeContext.autoThemeChange} onClick={onAutoThemeChange} />}
                    label={
                        <ThemeTypography>
                            {t('auto_change_theme')}
                        </ThemeTypography>
                    }
                />

                <FormControlLabel
                    control={<Switch name='themeControl' onClick={themeContext.toggleTheme} />}
                    label={
                        <ThemeTypography>{
                            t('change_theme')}
                        </ThemeTypography>}
                />

                <Select value={currentLanguage} onChange={onLanguageChange}>
                    {LANGUAGES.map((value) => (
                        <MenuItem value={getLanguageShortNameByCode(value) ?? LanguageNameShort.ENGLISH}
                                  key={value}>
                            <ThemeTypography>
                                {getLanguageNameByCode(value)}
                            </ThemeTypography>
                        </MenuItem>),
                    )}
                </Select>
            </Toolbar>
        </AppHeaderBar>

    );
};
