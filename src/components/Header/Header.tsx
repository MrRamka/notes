import React, { FC, useCallback, useContext, useState } from 'react';
import {
    AppBar,
    Checkbox,
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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            //flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
    }),
);

//TODO Refactoring
export const Header: FC = () => {

    const { t, i18n } = useTranslation();
    const classes = useStyles();
    const [currentLanguage, setCurrentLanguage] = useState<LanguageNameShort>(LanguageNameShort.ENGLISH);

    const value = useContext(ThemeContext);

    const onLanguageChange = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
        setCurrentLanguage(event.target.value as LanguageNameShort);
        i18n.changeLanguage(event.target.value as string);
    }, [i18n]);

    return (

        <AppBar position='fixed' style={{ backgroundColor: value.theme.surface }}>
            <Toolbar>
                <ThemeTypography className={classes.title}>
                    {t('title')}
                </ThemeTypography>

                <FormControlLabel
                    control={<Checkbox name='autoSwitchTheme' style={{ color: value.theme.on_surface }} />} label={
                    <ThemeTypography>
                        {t('auto_change_theme')}
                    </ThemeTypography>
                } />

                <FormControlLabel control={<Switch name='themeControl' onClick={value.toggleTheme} />}
                                  label={
                                      <ThemeTypography>{
                                          t('change_theme')}
                                      </ThemeTypography>} />
                <Select value={currentLanguage} onChange={onLanguageChange}>
                    {LANGUAGES.map((value) => (
                        <MenuItem value={getLanguageShortNameByCode(value) ?? LanguageNameShort.ENGLISH}
                                  key={Date.now() + value}>
                            <ThemeTypography>
                                {getLanguageNameByCode(value)}
                            </ThemeTypography>
                        </MenuItem>),
                    )}
                </Select>
            </Toolbar>
        </AppBar>

    );
};
