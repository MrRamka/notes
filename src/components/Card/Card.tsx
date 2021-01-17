import React, { FC } from 'react';
import { Card as MaterialCard, CardContent, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { CardType } from '../../types';

type Props = {
    card: CardType;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            marginBottom: theme.spacing(1),
        },
        title: {
            marginBottom: theme.spacing(1),
        }
    }),
);


/**
 *  Render single card
 * @param card { CardType } Card
 */
export const Card: FC<Props> = ({ card }) => {

    const classes = useStyles();

    //todo: render description 100 symbols
    return (
        <MaterialCard className={classes.card}>
            <CardContent>
                <Typography variant="subtitle1" className={classes.title}>{card.title}</Typography>
                {card.description}
            </CardContent>
        </MaterialCard>
    );
};
