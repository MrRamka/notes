import React, { FC, useCallback, useState } from 'react';
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
    Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { getLanguageNameByCode, getLanguageShortNameByCode, LanguageNameShort, LANGUAGES } from '../../types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
        lang: {
            color: '#fff',
        },
    }),
);

export const Header: FC = () => {

    const { t, i18n } = useTranslation();
    const classes = useStyles();
    const [currentLanguage, setCurrentLanguage] = useState<LanguageNameShort>(LanguageNameShort.ENGLISH);


    const onLanguageChange = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
        setCurrentLanguage(event.target.value as LanguageNameShort);
        i18n.changeLanguage(event.target.value as string);
    }, [i18n]);

    return (
        <div className={classes.root}>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography className={classes.title}>
                        {t('title')}
                    </Typography>
                    <FormControlLabel control={<Checkbox name='autoSwitchTheme' />} label={t('auto_change_theme')} />
                    {
                        //todo: add theme
                    }
                    <FormControlLabel control={<Switch name='themeControl' />} label={t('change_theme')} />
                    <Select value={currentLanguage} className={classes.lang} onChange={onLanguageChange}>
                        {LANGUAGES.map((value) => (
                            <MenuItem value={getLanguageShortNameByCode(value) ?? LanguageNameShort.ENGLISH}
                                      key={Date.now() + value}>
                                {getLanguageNameByCode(value)}
                            </MenuItem>),
                        )}
                    </Select>
                </Toolbar>
            </AppBar>
        </div>
    );
};
