import React, { FC, useCallback, useContext, useState } from 'react';
import { CardContent, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { CardType } from '../../types';
import { Card as ThemedCard, CardTitle } from './styles';
import { CardModal } from '../CardModal';
import { ThemeContext } from '../../theme-context';
import { CardProps } from './types';
import { ThemeTypography } from '../ThemeTypography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            marginBottom: theme.spacing(1),
            maxHeight: 70
        },
        title: {
            fontWeight: 'bold',
            display: 'block'
        },
    }),
);


/**
 *  Render single card
 * @param card { CardType } Card
 */
export const Card: FC<CardProps> = ({ card }) => {

    const classes = useStyles();
    const theme = useContext(ThemeContext);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const handleCardClick = useCallback(() => {
        setModalOpen(!modalOpen);
    }, [modalOpen]);

    //todo: render description 100 symbols
    return (
        <>
            <ThemedCard className={classes.card} onClick={handleCardClick} themeColor={theme.theme.card} style={{ cursor: 'pointer'}}>
                <CardContent>
                    <CardTitle className={classes.title}>{card.title}</CardTitle>
                    <ThemeTypography>{card.description}</ThemeTypography>
                </CardContent>
            </ThemedCard>
            {modalOpen && <CardModal setModalOpen={setModalOpen} card={card} />}
        </>
    );
};
